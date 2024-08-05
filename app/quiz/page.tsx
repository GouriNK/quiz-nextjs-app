'use client';

import { Card } from 'primereact/card';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MasterDataType } from '@/app/lib/definitions';

export default function Home() {
const [domains, setDomains] = useState<MasterDataType[]>([]);

useEffect(() => {
    async function fetchDomains() {
      const response = await fetch('/api/masterdata/domains');
      const data = await response.json();
      setDomains(data);
    }
    fetchDomains();
  }, []);

return (
    <div>
        <div>
            {domains.map((domain, index) => (
                <Card key={index} title={domain.label} subTitle={domain.label}>
                    <p>{domain.label}</p>
                    <Link href={`/quiz/test/${domain.value}`} className="p-button font-bold">
                        {'Go'}
                  </Link>
                </Card>
            ))}
        </div>
    </div>
);
  }
  
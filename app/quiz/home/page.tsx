'use client';

import { Card } from 'primereact/card';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MasterDataType } from '@/app/lib/definitions';

export default function Home() {
//   const cardData = [
//     { title: 'Card 1', subTitle: 'Subheading 1', content: 'Content for card 1', buttonLabel: 'Action 1', link: `/quiz/1/test` },
//     { title: 'Card 2', subTitle: 'Subheading 2', content: 'Content for card 2', buttonLabel: 'Action 2', link: `/quiz/2/test` },
//     { title: 'Card 3', subTitle: 'Subheading 3', content: 'Content for card 3', buttonLabel: 'Action 3', link: `/quiz/3/test` },
//     { title: 'Card 4', subTitle: 'Subheading 4', content: 'Content for card 4', buttonLabel: 'Action 4', link: `/quiz/all/test` },
// ];

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
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
            {domains.map((domain, index) => (
                <Card key={index} title={domain.label} subTitle={domain.label} style={{ flex: 1 }}>
                    <p>{domain.label}</p>
                    <Link href={domain.label} className="p-button font-bold">
                        {'Go'}
                  </Link>
                </Card>
            ))}
        </div>
        {/* <div style={{ display: 'flex' }}>
            <Card title={cardData[3].title} subTitle={cardData[3].subTitle} style={{ flex: 1 }}>
                <p>{cardData[3].content}</p>
                <Link href={cardData[3].link} className="p-button font-bold">
                        {cardData[3].buttonLabel}
                  </Link>
            </Card>
        </div> */}
    </div>
);
  }
  
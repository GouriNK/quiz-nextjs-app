'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';

export default function Page() {
  const router = useRouter();
    return (
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
          <h2>Login Error</h2>
          <p>There was an issue with your login attempt. Please try again or contact support.</p>
          <Button label="Go back to Login" onClick={() => router.push('/auth/login')} />
      </div>
  );
}
  
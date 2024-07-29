// src/app/auth/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function LoginPage() {
    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetch the CSRF token from NextAuth API
        const fetchCsrfToken = async () => {
            const res = await fetch('/api/auth/csrf');
            const data = await res.json();
            setCsrfToken(data.csrfToken);
        };

        fetchCsrfToken();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/auth/callback/credentials', {
            method: 'POST',
            body: new URLSearchParams(formData as any),
        });


        if (response.ok ) {
            router.push(response.url);
        } else {
            console.log('Login failed:', response);
            router.push(response.url); 
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input name="csrfToken" type="hidden" value={csrfToken || ''} />
                <div className="p-field">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" name="email" placeholder="Enter your email" type="text" required />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Password</label>
                    <Password id="password" name="password" placeholder="Enter your password" required />
                </div>
                <Button label="Sign In" type="submit" className="p-button" />
            </form>
        </div>
    );
}

'use client'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { signIn, signOut, useSession } from "next-auth/react"; // client component approach
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './Navbar.module.css'; 

export default function Navbar() {

    const pathname = usePathname();
    const [activePath, setActivePath] = useState('');

    const signOutOfApp = () => {
        console.log('Logout here!');
        signOut();
    }

    const signIntoApp = () => {
        console.log('Logout here!');
        signIn();
    }

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    // const  {data:session} = useSession(); // client component approach
    const { data: session, status } = useSession();

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/',
            className: activePath === '/' ? 'active-menuitem' : ''
        },
        // {
        //     label: JSON.stringify(session),
        //     icon: 'pi pi-home',
        //     url: '/'
        // },
        // {
        //     label: JSON.stringify(status),
        //     icon: 'pi pi-home',
        //     url: '/'
        // },
        {
            label: 'Quiz',
            url: '/quiz',
            className: activePath === '/quiz' ? 'active-menuitem' : ''
        },
        {
            label: 'All Questions',
            visible: status === "authenticated"  ? true : false,
            url: '/question/view/all',
            className: activePath === '/question/view/all' ? 'active-menuitem' : ''
        },
        {
            label: 'Logout',
            visible: status === "authenticated"  ? true : false,
            command: () => {
                signOutOfApp();
            }
        },
        {
            label: 'Login',
            visible: status === "unauthenticated"  ? true : false,
            command: () => {
                signIntoApp();
            }
        }
    ];
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}
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
            label: 'Quiz Domains',
            icon: 'pi pi-home',
            url: '/quiz',
            className: activePath === '/quiz' ? 'active-menuitem' : ''
        },
        {
            label: 'View All Questions',
            icon: 'pi pi-star',
            visible: status === "authenticated"  ? true : false,
            url: '/question/view/all',
            className: activePath === '/question/view/all' ? 'active-menuitem' : ''
        },
        {
            label: 'Logout',
            icon: 'pi pi-star',
            visible: status === "authenticated"  ? true : false,
            command: () => {
                signOutOfApp();
            }
        },
        {
            label: 'Login',
            icon: 'pi pi-star',
            visible: status === "unauthenticated"  ? true : false,
            command: () => {
                signIntoApp();
            }
        },
        // {
        //     label: 'Projects',
        //     icon: 'pi pi-search',
        //     items: [
        //         {
        //             label: 'Components',
        //             icon: 'pi pi-bolt'
        //         },
        //         {
        //             label: 'Blocks',
        //             icon: 'pi pi-server'
        //         },
        //         {
        //             label: 'UI Kit',
        //             icon: 'pi pi-pencil'
        //         },
                // {
                //     label: 'Templates',
                //     icon: 'pi pi-palette',
                //     items: [
                //         {
                //             label: 'Apollo',
                //             icon: 'pi pi-palette'
                //         },
                //         {
                //             label: 'Ultima',
                //             icon: 'pi pi-palette'
                //         }
                //     ]
                // }
            // ]
        // },
        // {
        //     label: 'Contact',
        //     icon: 'pi pi-envelope'
        // }
    ];
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}
'use client'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { signIn, signOut, useSession } from "next-auth/react"; // client component approach

export default function Navbar() {

    const signOutOfApp = () => {
        console.log('Logout here!');
        signOut();
    }

    const signIntoApp = () => {
        console.log('Logout here!');
        signIn();
    }

    const  {data:session} = useSession(); // client component approach


    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/quiz/home'
        },
        {
            label: 'View All Questions',
            icon: 'pi pi-star',
            visible: session?.user?.name  ? true : false,
             url: '/quiz/all/view'
        },
        {
            label: 'Logout',
            icon: 'pi pi-star',
            visible: session?.user?.name  ? true : false,
            command: () => {
                signOutOfApp();
            }
        },
        {
            label: 'Login',
            icon: 'pi pi-star',
            visible: session?.user?.name  ? false : true,
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
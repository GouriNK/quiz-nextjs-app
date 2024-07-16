'use client'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export default function Navbar() {

    const signOut = () => {
        console.log('Logout here!');
    }

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/quiz/home'
        },
        {
            label: 'View All Questions',
            icon: 'pi pi-star',
             url: '/quiz/all/view'
        },
        {
            label: 'Logout',
            icon: 'pi pi-star',
            command: () => {
                signOut();
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
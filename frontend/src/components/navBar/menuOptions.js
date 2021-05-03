
import { Info, MapLocation, BarChart } from 'grommet-icons';


export const menuOptions = [
    {
        label: 'Home',
        href: '/home',
        icon: <MapLocation color='#E47D31'/>,
    },
    {
        label: 'Data Table',
        href: '/analysis',
        icon: <BarChart color='#E47D31'/>,
    },
    {
        label: 'About',
        href: '/about',
        icon: <Info color='#E47D31'/>,
    }
];
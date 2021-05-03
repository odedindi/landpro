import MapRoundedIcon from '@material-ui/icons/MapRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';


const iconColor = { color:'#E47D31' };
const iconSize = 'large';

export const menuOptions = [
    {
        label: 'Home',
        href: '/home',
        icon: <MapRoundedIcon fontSize={ iconSize } style={ iconColor }/>
    },
    {
        label: 'Data Table',
        href: '/analysis',
        icon: <AssessmentRoundedIcon fontSize={ iconSize } style={ iconColor }/>
    },
    {
        label: 'About',
        href: '/about',
        icon: <FingerprintRoundedIcon fontSize={ iconSize } style={ iconColor }/>
    }
];
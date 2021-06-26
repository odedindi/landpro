// ======================== react =========================
import React, { lazy } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// ======================== styles ========================
import { MenuOptionButton, SelectWrapper } from './styles';
// ====================== icons ===========================
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';
// ====================== components ======================
const SelectLanguage = lazy(() => import('../SelectLanguage'));
// ========================================================


const MenuItems = ({ iconSize, t }) => {
    const { pathname } = useLocation();  
    const history = useHistory();

    const items = [
        {
            title: 'home',
            path: '/',
            icon: <HomeRoundedIcon fontSize={ iconSize }/>
        },
        {
            title: 'demo',
            path: '/demo',
            icon: <MapRoundedIcon fontSize={ iconSize }/>
        },
        {
            title: 'about',
            path: '/about',
            icon: <FingerprintRoundedIcon fontSize={ iconSize }/>
        },
    ];
    const demoItems = [
        {
            title: 'home',
            path: '/',
            icon: <HomeRoundedIcon fontSize={ iconSize }/>
        },
        {
            title: 'demo',
            path: '/demo',
            icon: <MapRoundedIcon fontSize={ iconSize }/>
        },
        {
            title: 'analysis',
            path: '/demo/analysis',
            icon: <AssessmentRoundedIcon fontSize={ iconSize }/>
        },
        {
            title: 'about',
            path: '/about',
            icon: <FingerprintRoundedIcon fontSize={ iconSize }/>
        },
    ];

    if (pathname === '/demo' || pathname === '/demo/analysis') {
        return (
            <>
                {
                    demoItems.map(item => 
                        pathname !== item.path &&
                            <MenuOptionButton key={ item.title }
                                onClick={ () => history.push(item.path) }
                            >
                                { t(`nav.${ item.title }`) }
                                { item.icon }
                            </MenuOptionButton>
                    )
                }
                <SelectWrapper>
                    <SelectLanguage iconSize={ iconSize }/>
                </SelectWrapper>
            </>
        )
    }

    return (
        <>
            {
                items.map(item => 
                    pathname !== item.path &&
                        <MenuOptionButton key={ item.title }
                            onClick={ () => history.push(item.path) }
                        >
                            { t(`nav.${ item.title }`) }
                            { item.icon }
                        </MenuOptionButton>
                )
            }
            <SelectWrapper>
                <SelectLanguage iconSize={ iconSize }/>
            </SelectWrapper>
        </>
    );
};

export default MenuItems;
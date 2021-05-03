import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// ============= styles & components =============
import { MenuOptionButton, MenuWrapper, NavBarButton, NavBarWrapper, Title } from '../../styles/navBar';
import { Drawer } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
// ===============================================
// ================ menu options =================
import { menuOptions } from './menuOptions';
// ===============================================

const NavBar = () => {
    const history = useHistory();
    const [ showNavBar, setShowNavBar ] = useState(false);
    const openNavBar = () => setShowNavBar(true);
    const closeNavBar = () => setShowNavBar(false);

    return (
        <NavBarWrapper>

            <Drawer anchor='right' open={ showNavBar } onClose={ closeNavBar }>
                <MenuWrapper>
                    {
                        menuOptions.map((option) => 
                            <MenuOptionButton key={ option.label } onClick={ () => history.push(option.href) }>
                            { option.label }{ option.icon }
                            </MenuOptionButton>
                        )
                    }
                </MenuWrapper>
            </Drawer>

            <Title>LandPro</Title>

            <NavBarButton onClick={ openNavBar }>
                <MenuOpenIcon/>
            </NavBarButton>

        </NavBarWrapper>
    );
};

export default NavBar;

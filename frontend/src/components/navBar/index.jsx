// ======================== react =========================
import React, { lazy, useState } from 'react';
// ======================== styles ========================
import * as S from './styles';
import { Drawer } from '@material-ui/core';
import { CSSTransition } from "react-transition-group";
// ===================== translations =====================
import { useTranslation } from 'react-i18next'
// ====================== icons ===========================
import logo from '../../assets/logos/logo.png'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
// ====================== components ======================
const MenuItems = lazy(() => import('./menuItems'));
// ========================================================



const NavBar = () => {
    const { t } = useTranslation();

    const [ showMenu, setShowMenu ] = useState(false);
    const openNavBar = () => setShowMenu(true);
    const closeNavBar = () => setShowMenu(false);


    const [ isSmallScreen ] = useState(false);
    const iconSize = 'large';

    const Items = () => (
        <MenuItems 
            t={ t } 
            iconSize={ iconSize } 
        />
    )
    return (
        <S.NavBarWrapper id='navBar'>
            <CSSTransition
                in={ !isSmallScreen || showMenu }
                timeout={ 350 }
                classNames="NavAnimation"
                unmountOnExit
            >
            <Drawer anchor='right' open={ showMenu } onClose={ closeNavBar }>
                <S.DrawerMenuWrapper>
                    <S.MenuOptionButton onClick={ closeNavBar }>
                        <S.MenuTitle>{ t('nav.drawerTitle') }</S.MenuTitle>
                        <MenuOpenRoundedIcon fontSize={ iconSize }/>
                    </S.MenuOptionButton>
                    <Items/>
                </S.DrawerMenuWrapper>
            </Drawer>
            </CSSTransition>
            <S.LogoContainer href="/" aria-label="homepage">
                <img src={ logo } alt="landpro logo"/>
                <h3>LandPro</h3>
            </S.LogoContainer>

            <S.LargeScreenWrapper>
            <Items/>
            </S.LargeScreenWrapper>

            <S.NavBarMenuButton onClick={ openNavBar }>
                <MenuRoundedIcon fontSize={ iconSize }/> 
            </S.NavBarMenuButton>

        </S.NavBarWrapper>
    );
};

export default NavBar;

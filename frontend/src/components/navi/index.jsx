import React from 'react';

import { Anchor, Box, Header,  Menu, ResponsiveContext } from 'grommet';
import { Menu as MenuIcon, Info, MapLocation, BarChart } from 'grommet-icons';


export const Navi = () => {

   return (
    <Header background="light-5" pad="medium" height="xsmall" elevation='small'>
      <h3>LandPro</h3>  
      <ResponsiveContext.Consumer>
        {size =>
          size === 'medium' ? (
            <Box justify="end">

              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Home</Box>,
                    href: '/home',
                  },
                  {
                    label: <Box pad="small">Data Table</Box>,
                    href: '/analysis/',
                  },
                  {
                    label: <Box pad="small">About</Box>,
                    href: '/about/',
                  },
                ]}
              />
            </Box>
          ) : (
            <>
            <Box justify="end" direction="row" gap="medium">
              <Anchor icon={<MapLocation />} href="/home" label="Home" />
              <Anchor icon={<BarChart />} href="/analysis/" label="Data Table" />
              <Anchor icon={<Info />} href="/about/" label="About" />
            </Box>
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}
export default Navi;
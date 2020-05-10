import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Bac..kdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';

const sideDrawer = (props) => {
    return(
        <Wrapper>
            <Backdrop />
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    );
}

export default sideDrawer;
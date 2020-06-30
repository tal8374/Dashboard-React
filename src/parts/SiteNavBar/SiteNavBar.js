import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import MessagesMenu from './MessagesMenu/MessagesMenu'
import AlertsMenu from './AlertsMenu/AlertsMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import SideMenu from './SideMenu/SideMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

const SiteNavBar = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: isSideMenuOpen,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap>Dashboard</Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <MessagesMenu />
                        <AlertsMenu />
                        <ProfileMenu />
                    </div>
                    <div className={classes.sectionMobile}>
                        <MobileMenu>
                            <MessagesMenu />
                            <AlertsMenu />
                            <ProfileMenu />
                        </MobileMenu>
                    </div>
                </Toolbar>
            </AppBar>
            <SideMenu
                setIsSideMenuOpen={setIsSideMenuOpen}
                isSideMenuOpen={isSideMenuOpen}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    {children}
            </main>
        </div>
    );
}

export default SiteNavBar;
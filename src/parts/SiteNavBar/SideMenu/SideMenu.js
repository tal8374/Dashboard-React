import React from 'react'
import { useHistory } from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

const menues = [
    {
        text: 'Sales',
        icon: <AttachMoneyIcon />,
        onClick: (history) => history.push({ pathname: '/sales' }),
    },
    {
        text: 'Sellers',
        icon: <RecordVoiceOverIcon />,
        onClick: (history) => history.push({ pathname: '/sellers' }),
    },
    {
        text: 'Customers',
        icon: <ContactPhoneIcon />,
        onClick: (history) => history.push({ pathname: '/customers' }),
    },
];



const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
    const classes = useStyles();
    const theme = useTheme();

    let history = useHistory();

    return (
        <Drawer
            onMouseEnter={() => setIsSideMenuOpen(true)}
            onMouseLeave={() => setIsSideMenuOpen(false)}
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isSideMenuOpen,
                [classes.drawerClose]: !isSideMenuOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isSideMenuOpen,
                    [classes.drawerClose]: !isSideMenuOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={() => setIsSideMenuOpen(false)}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {menues.map((payload) => (
                    <ListItem
                        button
                        key={payload.text}
                        key={payload.text}
                        onClick={() => payload.onClick(history)}
                    >
                        <ListItemIcon>{payload.icon}</ListItemIcon>
                        <ListItemText primary={payload.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideMenu;
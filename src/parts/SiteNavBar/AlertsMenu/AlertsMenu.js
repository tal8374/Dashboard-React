import React from 'react'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const AlertsMenu = ({ menuId }) => {
    const [anchorElAlerts, setAnchorElAlerts] = React.useState(null);

    return (
        <React.Fragment>
            <IconButton aria-label="show 2 new notifications" color="inherit" onClick={(event) => setAnchorElAlerts(event.currentTarget)}>
                <Badge badgeContent={2} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            <Menu
                anchorEl={anchorElAlerts}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElAlerts)}
                onClose={() => setAnchorElAlerts(null)}
            >
                <MenuItem onClick={() => setAnchorElAlerts(null)}>
                    <ListItemIcon> <NotificationImportantIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Alert 1</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElAlerts(null)}>
                    <ListItemIcon> <NotificationImportantIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Alert 2</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )

}

export default AlertsMenu;
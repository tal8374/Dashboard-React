import React from 'react'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';

const ProfileMenu = ({ menuId }) => {

    const [anchorElProfile, setAnchorElProfile] = React.useState(null);

    return (
        <React.Fragment>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={(event) => setAnchorElProfile(event.currentTarget)}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>

            <Menu
                anchorEl={anchorElProfile}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElProfile)}
                onClose={() => setAnchorElProfile(null)}
            >
                <MenuItem onClick={() => setAnchorElProfile(null)}>
                    <ListItemIcon> <AccountBoxIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElProfile(null)}>
                    <ListItemIcon> <AttachMoneyIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Your sales</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElProfile(null)}>
                    <ListItemIcon> <EmojiPeopleIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Your customers</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => setAnchorElProfile(null)}>
                    <ListItemIcon> <ExitToAppIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Sign out</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>

    )
}

export default ProfileMenu;
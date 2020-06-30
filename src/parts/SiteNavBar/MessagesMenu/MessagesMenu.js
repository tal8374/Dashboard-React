import React from 'react';

import MessageIcon from '@material-ui/icons/Message';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const MessagesMenu = ({ menuId }) => {

    const [anchorElMessages, setAnchorElMessages] = React.useState(null);
    const isMessagesMenuOpen = Boolean(anchorElMessages);

    const handleMessagesMenuOpen = (event) => {
        setAnchorElMessages(event.currentTarget);
    };

    const handleMessagesMenuClose = () => {
        setAnchorElMessages(null);
        handleMessagesMenuClose();
    };

    return (
        <React.Fragment>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleMessagesMenuOpen}>
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>

            <Menu
                anchorEl={anchorElMessages}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMessagesMenuOpen}
                onClose={handleMessagesMenuClose}
            >
                <MenuItem onClick={handleMessagesMenuClose}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 1</Typography>
                </MenuItem>
                <MenuItem onClick={handleMessagesMenuClose}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 2</Typography>
                </MenuItem>
                <MenuItem onClick={handleMessagesMenuClose}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 3</Typography>
                </MenuItem>
                <MenuItem onClick={handleMessagesMenuClose}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 4</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )

}

export default MessagesMenu;
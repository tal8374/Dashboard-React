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

    return (
        <React.Fragment>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={(event) => setAnchorElMessages(event.currentTarget)}>
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
                open={Boolean(anchorElMessages)}
                onClose={() => setAnchorElMessages(null)}
            >
                <MenuItem onClick={() => setAnchorElMessages(null)}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 1</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElMessages(null)}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 2</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElMessages(null)}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 3</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElMessages(null)}>
                    <ListItemIcon> <MessageIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">Message 4</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )

}

export default MessagesMenu;
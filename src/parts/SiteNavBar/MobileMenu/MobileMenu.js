import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MailIcon from '@material-ui/icons/Mail';

const MobileMenu = ({ mobileMenuId }) => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>

            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 2 new alerts" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem >
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default MobileMenu;
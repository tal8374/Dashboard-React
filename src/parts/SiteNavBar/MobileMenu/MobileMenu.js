import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';

const MobileMenu = ({ mobileMenuId, children }) => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    return (
        <React.Fragment>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={(event => setMobileMoreAnchorEl(event.currentTarget))}
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
                open={Boolean(mobileMoreAnchorEl)}
                onClose={() => setMobileMoreAnchorEl(null)}
            >
             {children}
            </Menu>
        </React.Fragment>
    )
}

export default MobileMenu;
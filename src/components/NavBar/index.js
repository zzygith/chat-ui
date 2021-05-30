import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { MenuIcon, StyledMenuItem,MenuItems } from './style'
import Badge from '../Badge/index'
import Avatar from '../Avatar/index'
import profileImage from '../../assests/images/face-male-1.jpg'
import { faCommentDots, faFolder, faStickyNote, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCog, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Link, matchPath, useLocation } from 'react-router-dom'


function NavBar({ ...rest }) {
    return (
        <StyledNavBar {...rest} >
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem to="/" showBage icon={faCommentDots} />
                <MenuItem to="/contacts" icon={faUser}/>
                <MenuItem to="/files" icon={faFolder} />
                <MenuItem to="/notes" icon={faStickyNote} />
                <MenuItem to="#" icon={faEllipsisH}/>
                <MenuItem to="/settings" icon={faCog} style={{ alignSelf: "center"}} />
            </MenuItems>
        </StyledNavBar>
    )
}
function MenuItem({ to, icon, showBage, ...rest }) {
    const loc = useLocation();
    const active = !!matchPath(loc.pathname, {
        path: to,
        exact: to === '/',
    });
    return (
        <StyledMenuItem active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBage}>
                    <MenuIcon active={active?1:0} icon={icon} />
                </Badge>            
            </Link>
        </StyledMenuItem>
    );
}



export default NavBar;
export { MenuItem }

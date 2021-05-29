import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { MenuIcon, StyledMenuItem,MenuItems } from './style'
import Badge from '../Badge/index'
import Avatar from '../Avatar/index'
import profileImage from '../../assests/images/face-male-1.jpg'
import { faCommentDots, faFolder, faStickyNote, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCog, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function NavBar({ ...rest }) {
    return (
        <StyledNavBar {...rest} >
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem showBage active icon={faCommentDots} />
                <MenuItem icon={faUser}/>
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH}/>
                <MenuItem icon={faCog} style={{ alignSelf: "center"}} />
            </MenuItems>
        </StyledNavBar>
    )
}
function MenuItem({ icon, active, showBage, ...rest }) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBage}>
                    <MenuIcon active={active?1:0} icon={icon} />
                </Badge>
            </a>
        </StyledMenuItem>
    );
}



export default NavBar;
export { MenuItem }

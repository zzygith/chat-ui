import React from 'react'
import PropTypes from 'prop-types'
import face1 from '../../assests/images/face-male-1.jpg'
import StyledAvatar, {StatusIcon, AvatarClip, AvatarImage} from './style'

function Avatar({ src, size = '48px', status, StatusIconSize = '8px', ...rest }) {
    return (
        <StyledAvatar {...rest} >
            { status && (<StatusIcon status={status} size={StatusIconSize}></StatusIcon>)} {/* When status isn't given, don't show StatusIcon. This is for Profile, where don't need StatusIcon. */}
            <AvatarClip size={size}><AvatarImage src={src} alt="" /></AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propTypes = {
    src: PropTypes.any.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(["online","offline"]),
    statusIconSize:PropTypes.string
}

export default Avatar


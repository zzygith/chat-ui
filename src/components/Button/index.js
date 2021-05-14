import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'

function Button({children, type="primary", size="30px", shape="circle", bgcolor, ...rest }) {
    return (
        <StyledButton type={type} size={size} shape={shape} bgcolor={bgcolor} {...rest} >
           {children}
        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["primary"]),
    size: PropTypes.string,
    shape: PropTypes.oneOf(["circle", "rect"])

}

export default Button


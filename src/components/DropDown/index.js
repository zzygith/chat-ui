import React from 'react'
import PropTypes from 'prop-types'
import StyledDropDown, { DropDownContainer } from './style'

function DropDown({children, content, align="right", ...rest }) {
    return (
        <StyledDropDown {...rest} >
           {children}
            {content &&
            <DropDownContainer align={align}>
                {content}
            </DropDownContainer>}
        </StyledDropDown>
    )
}

DropDown.propTypes = {
    content: PropTypes.any,
    align:PropTypes.oneOf(["top", "bottom", "left", "right"])

}

export default DropDown


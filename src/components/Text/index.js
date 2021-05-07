import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './style'

function Text({children, type="primary", size="normal", bold, ...rest }) {
    return (
        <StyledText type={type} size={size} bold={bold} {...rest} >
           {children}
        </StyledText>
    )
}

Text.propTypes = {
    type: PropTypes.oneOf(['priamry', 'secondary', 'danger']),
    size: PropTypes.oneOf([
    'normal',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'small',
    'xsmall',
    'xxsmall',]),
    bold: PropTypes.bool

}

export default Text


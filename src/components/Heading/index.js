import React from 'react'
import PropTypes from 'prop-types'
import StyledHeading from './style'

function Heading({children, level, ...rest }) {
    return (
        <StyledHeading as={`h${level}`} {...rest} >     {/* Use different headings according to level */}
           {children}
        </StyledHeading>
    )
}

Heading.propTypes = {
    children: PropTypes.any,
    level:PropTypes.oneOf([1,2,3,4,5,6])
}

export default Heading


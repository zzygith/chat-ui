import React from 'react'
import PropTypes from 'prop-types'
import StyledFilter, {Filters, Action } from './style'
import Text from "../Text/index"

function Filter({children, ...rest }) {
    return (
        <StyledFilter {...rest} >
           {children}
        </StyledFilter>
    )
}

// These two components will be used as children of Filter component
Filter.Filters = ({children, label, ...rest}) => (
    <Filters {...rest}>
        <Text type="secondary">{label}:&nbsp;&nbsp;</Text>
        {children}
    </Filters>
)

Filter.Action = ({children, label, ...rest}) => (
    <Action {...rest}>
        <Text type="secondary">{label}</Text>
        {children}
    </Action>
)

Filter.propTypes = {

}

export default Filter


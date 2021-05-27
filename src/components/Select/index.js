import React from 'react'
import PropTypes from 'prop-types'
import StyledSelect from './style'
import LabelContainer from '../LabelContainer'

function Select({ label, type, children, ...rest }) {
    const selecWithoutLabel = (
        <StyledSelect {...rest} >
           {children}
        </StyledSelect>);
    return label ? <LabelContainer label={label}>{selecWithoutLabel}</LabelContainer> : selecWithoutLabel;
}

Select.propTypes = {
    type: PropTypes.oneOf(["form"]),
    children:PropTypes.any
}

export default Select


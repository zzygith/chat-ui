import React from 'react'
import PropTypes from 'prop-types'
import Styledinput, { Prefix, Suffix, InputContainer } from './style'

function Input({placeholder="Enter for search", prefix, suffix, ...rest }) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{ prefix }</Prefix>}
            <Styledinput placeholder={placeholder} />
            {suffix && <suffix>{ suffix }</suffix>}
        </InputContainer>


    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix:PropTypes.any,

}

export default Input


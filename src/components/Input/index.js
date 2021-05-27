import React from 'react'
import PropTypes from 'prop-types'
import Styledinput, { Prefix, Suffix, InputContainer } from './style'
import Icon from '../Icon/index'
import InputText from './InputText/index'
import {ReactComponent as SearchIcon} from '../../assests/icons/search.svg' 

function Input({placeholder="Enter for search", prefix, suffix, ...rest }) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{ prefix }</Prefix>}
            <Styledinput placeholder={placeholder} />
            {suffix && <suffix>{ suffix }</suffix>}
        </InputContainer>
    )
}

function Search({ placeholder = "Enter for search", ...rest }) {
    return (
        <Input placeholder={placeholder}  prefix={ <Icon icon={SearchIcon} color='Gray' width={18} height={18} />} />
    )
}

Input.Search = Search; // It is used for search bar.
Input.Text = InputText; // It is used for changing personal information.

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix:PropTypes.any,
}

export default Input;


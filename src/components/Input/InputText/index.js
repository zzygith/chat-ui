import React from 'react'
import PropTypes from 'prop-types'
import StyledInputText, {InputUnderline} from './style'
import LabelContainer from '../../LabelContainer/index'

function InputText({label, placeholder="Please enter content", ...rest }) {
    const input = <InputUnderline type="text" placeholder={placeholder} />;
    
    return (
        <StyledInputText>
            {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
        </StyledInputText>
    );
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

export default InputText


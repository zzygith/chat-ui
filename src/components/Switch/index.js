import React from 'react'
import PropTypes from 'prop-types'
import StyledSwitch, { Slider, CheckBox } from './style'

function Switch({ ...rest }) {
    return (
        <StyledSwitch {...rest} >
            <CheckBox />
            <Slider />
        </StyledSwitch>
    )
}

Switch.propTypes = {

}

export default Switch


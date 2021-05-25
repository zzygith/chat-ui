import React from 'react'
import PropTypes from 'prop-types'
import StyledVoiceMessage from './style'
import Button from '../Button'
import {ReactComponent as Play} from '../../assests/icons/play.svg'
import Icon from '../Icon'
import { useTheme } from 'styled-components'
import {ReactComponent as Wave} from '../../assests/icons/wave.svg'
import Text from '../Text'

function VoiceMessage({ children, time, type, ...rest }) {
    const theme = useTheme();
    return (
        <StyledVoiceMessage type={type} {...rest} >
            <Button size="40px">
                <Icon icon={Play} color="white" width="14" height="16" styled={{transform: "translateX(1px"}}  />
            </Button>
            <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
            <Text bold>{time}</Text>
        </StyledVoiceMessage>
    )
}

VoiceMessage.propTypes = {
    children:PropTypes.any,
    type: PropTypes.oneOf(["mine"]),
    time: PropTypes.string,

}

export default VoiceMessage


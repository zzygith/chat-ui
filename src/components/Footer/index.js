import React from 'react'
import PropTypes from 'prop-types'
import StyledFooter,{IconContainer} from './style'
import Input from '../Input'
import Icon from '../Icon'
import Button from '../Button';
import { ReactComponent as ClipIcon } from '../../assests/icons/clip.svg'
import { ReactComponent as MicrophoneIcon} from '../../assests/icons/microphone.svg'
import { ReactComponent as PlaneIcon } from '../../assests/icons/plane.svg'

function Footer({children, ...rest }) {
    return (
        <StyledFooter {...rest} >
            <Input
                placeholder="Type a message here..."
                prefix={<Icon icon={ClipIcon} />}
                suffix={<IconContainer>
                            <Icon icon={MicrophoneIcon} />
                            <Button>
                                <Icon icon={PlaneIcon} color="white" styled={{transfrom:"translateX(-2px)"}} />
                            </Button>
                        </IconContainer>}
            />
        </StyledFooter>
    )
}

Footer.propTypes = {

}

export default Footer


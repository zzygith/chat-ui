import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar,{Title, Actions} from './style'
import Avatar from '../Avatar'
import Paragraph from '../Paragraph'
import Text from '../Text'
import face3 from "../../assests/images/face-male-3.jpg"
import Icon from '../Icon'
import {ReactComponent as Call} from "../../assests/icons/call.svg"
import {ReactComponent as Camera}from "../../assests/icons/camera.svg"
import {ReactComponent as Options} from "../../assests/icons/options.svg"

function TitleBar({children, ...rest }) {
    return (
        <StyledTitleBar {...rest} >
            <Avatar status="offline" src={face3} />
            <Title>
                <Paragraph size="large">Donald Johnson</Paragraph>
                <Paragraph type="secondary">
                    <Text>Offline</Text>
                    <Text> · Last seen 3 hours ago</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call} />
                <Icon opacity={0.3} icon={Camera} />
                <Icon opacity={0.3} icon={Options} />
            </Actions>
        </StyledTitleBar>
    )
}

TitleBar.propTypes = {

}

export default TitleBar


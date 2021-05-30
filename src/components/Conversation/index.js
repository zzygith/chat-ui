import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, {Conversations, MyChatBubble} from './style'
import TitleBar from '../TitleBar'
import ChatBubble from '../ChatBubble'
import VoiceMessage from '../VoiceMessage'
import Footer from '../Footer'

function Conversation({ onAvatarClick, ...rest }) {
    return (
        <StyledConversation {...rest} >
            <TitleBar onAvatarClick={onAvatarClick}/>
            <Conversations>
                <ChatBubble time="Yesterday 14:26PM">Hi Alex! What's up?</ChatBubble>
                <MyChatBubble time="Yesterday 14:38PM">Oh, hello! All perfectly. I work, study and know this wonderful world!</MyChatBubble>
                <ChatBubble time="Yesterday 19:26PM">
                    <VoiceMessage time="01:24"/>
                </ChatBubble>
                <MyChatBubble time="Today 06:18AM">
                    I remember everything mate. See you later.
                </MyChatBubble>
            </Conversations>
            <Footer/>
        </StyledConversation>
    )
}

Conversation.propTypes = {

}

export default Conversation


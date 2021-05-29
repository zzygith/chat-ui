import React from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style'
import NavBar from '../NavBar'
import MessageList from '../MessageList'
import Conversation from '../Conversation'
import Profile from '../Profile'


function ChatApp({ ...rest }) {
    return (
        <StyledChatApp {...rest} >
            <Nav>
                <NavBar/>
            </Nav>
            <Sidebar>
                <MessageList />
            </Sidebar>
            <Content>
                <Conversation/>
            </Content>
            <Drawer>
                <Profile/>
            </Drawer>
        </StyledChatApp>
    )
}

ChatApp.propTypes = {

}

export default ChatApp


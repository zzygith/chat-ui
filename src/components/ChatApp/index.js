import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style'
import NavBar from '../NavBar'
import MessageList from '../MessageList'
import ContactList from '../ContactList'
import FileList from '../FileList'
import NoteList from '../NoteList'
import EditProfile from '../EditProfile'
import Conversation from '../Conversation'
import Profile from '../Profile'
import Settings from '../Settings'
import BlockList from '../BlockList'
import { Route, Switch } from 'react-router'


function ChatApp({ ...rest }) {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <StyledChatApp {...rest} >
            <Nav>
                <NavBar/>
            </Nav>
            <Sidebar>
                <Switch>
                    <Route exact path="/" >
                        <MessageList />
                    </Route>
                    <Route exact path="/contacts" >
                        <ContactList />
                    </Route>
                    <Route exact path="/files" >
                        <FileList/>
                    </Route>
                    <Route exact path="/notes" >
                        <NoteList/>
                    </Route>
                    <Route path="/settings" >
                        <EditProfile/>
                    </Route>    
                </Switch>
            </Sidebar>
            <Content>
                <Switch>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/settings/blocked" >
                        <BlockList />
                    </Route>
                    <Route path="/">
                        <Conversation onAvatarClick={()=>setShowDrawer(true)} />
                    </Route>
                </Switch>
            </Content>
            <Drawer show={showDrawer}>
                <Profile onCloseClick={()=>setShowDrawer(false)} />
            </Drawer>
        </StyledChatApp>
    )
}

ChatApp.propTypes = {

}

export default ChatApp


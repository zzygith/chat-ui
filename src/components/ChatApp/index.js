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
import { Route, Switch, useLocation } from 'react-router-dom'
import { useTransition,animated } from 'react-spring'

function ChatApp({ ...rest }) {
    const [showDrawer, setShowDrawer] = useState(false);

    const location = useLocation();

    const getFirstSgmtPath=(location)=>location.pathname.split("/")[1]  // Get the first segment of path to avoid animation repetition.

    const transitions = useTransition(location, getFirstSgmtPath, {
        from: { opacity: 0, transform: "translate3d(-100px, 0, 0)" },
        enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        leave: { opacity: 0, transform: "translate3d(-100px, 0, 0)" },
    }); 
    console.log(transitions);
    
    return (
        <StyledChatApp {...rest} >
            <Nav>
                <NavBar/>
            </Nav>
            <Sidebar>
                {transitions.map(({ item: location, props, key }) => (
                    <animated.div key={key} style={props} >
            
                        <Switch location={location}>
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
                        
                </animated.div>
                ))}

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


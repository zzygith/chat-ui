import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageList, { Chatlist } from './style'
import Filter from "../Filter/index"
import Select from '../Select/index';
import Option from "../Option/index";
import Button from "../Button/index";
import Icon from "../Icon/index";
import Input from "../Input"
import ChatList from "./style"
import { ReactComponent as Plus } from "../../assests/icons/plus.svg";
import MessageCard from '../MessageCard';
import face1 from "../../assests/images/face-male-1.jpg"
import FilterList from '../FilterList'
import {animated} from 'react-spring'
import useStaggeredList from '../../hooks/useStaggeredList';
import messageDate from '../../data/messages'

/* Process the received data like JSON. */
function MessageList({ children, ...rest }) {
    const trailAnimes = useStaggeredList(6);
    return (
        <StyledMessageList {...rest} >
            <FilterList options={ ["Latest First", "Online First"] } actionLabel="Add New">
                <Chatlist>
                {
                    messageDate.map((message, index) => (
                        <animated.div key={message.id} style={trailAnimes[index]} >
                            <MessageCard
                                key={message.id}
                                active={index === 3}
                                replied={message.replied}
                                avatarSrc={message.avatarSrc}
                                name={message.name}
                                avatarStatus={message.status}
                                statusText={message.statusText}
                                time={message.time}
                                message={message.message}
                                unreadCount={message.unreadCount}
                            />                            
                        </animated.div>
                    ))
                }
                </Chatlist>
            </FilterList>
        </StyledMessageList>
    )
}
/* 
function ChatFilter() {
    return (
        <Filter styled={{padding:"20px 0"}}>
                <Filter.Filters label="Sort By">
                    <Select>
                        <Option>Latest First</Option>
                        <Option>Online First</Option>
                    </Select>
                </Filter.Filters>

                <Filter.Action label="Add New">
                    <Button>
                        <Icon icon={Plus} width={12} height={12} color="white" />
                    </Button>
                </Filter.Action>
        </Filter>


    )
}
 */
MessageList.propTypes = {

}

export default MessageList


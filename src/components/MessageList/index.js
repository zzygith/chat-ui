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

function MessageList({children, ...rest }) {
    return (
        <StyledMessageList {...rest} >

            <FilterList options={ ["Latest First", "Online First"] } actionLabel="Add New">
                <Chatlist>
                {
                    [1, 2, 3, 4, 5, 6].map((_, index) => (
                        <MessageCard
                            key={index}
                            active={index === 3}
                            replied={index % 3 === 0}
                            avatarSrc={face1}
                            name="Tobias Williams"
                            avatarStatus="online"
                            statusText="online"
                            time="3h ago"
                            message="Do not, for one repulse, forgo the purpose that you resolved to effort."
                            unreadCount={2}
                        />
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


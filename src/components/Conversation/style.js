import styled, { css } from 'styled-components'
import ChatBubble from '../ChatBubble'

// Containner for all Conversation
const Conversations = styled.div`
    padding:10px 15px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:cal(100%-30px);
    overflow-y:auto;
    flex:1;
    &>*{
        margin:10px 0;
    }
`;

const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
    align-self: flex-end;
`;

const StyledConversation = styled.div`
display:flex;
flex-direction: column;
height:100vh;
border:1px solid ${props => props.theme.gray4};
&>*:last-child{
    align-self:flex-end;
}

`;
export default StyledConversation;
export {Conversations, MyChatBubble}
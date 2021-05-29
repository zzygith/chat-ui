import styled, { css } from 'styled-components'
import Paragraph from '../Paragraph';
import Text from '../Text';
import Badge from '../Badge';
import {card, activeBar} from '../../utils/mixins'
import StyledAvatar from '../Avatar/style';


const Name = styled(Text).attrs({ size: 'normal' })`
    grid-area: name;
`;

//Inherit the Text component and set size attribute
const Time = styled(Text).attrs({ size: 'medium', type: 'secondary' })`
    grid-area: time;
    justify-self:end;
`;

const Status = styled(Text).attrs({ type: 'secondary' })`
    grid-area: status;
`;

const Message = styled.div`
  grid-area: message;
  display:grid;
  grid-template-columns:1fr 30px;
  align-items:center;
  ${props => props.replied && css`
    grid-template-columns:24px 1fr 30px;
  `}

  `;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const UnreadBadge = styled(Badge)`
  justify-self:end;
  `;

const StyledMessageCard = styled.div`
    ${card()};
    display:grid;
    grid-template-areas:
        "avatar name time"
        "avatar status status"
        "message message message";
    grid-template-columns:64px 1fr 1fr;
    row-gap:8px;
    transition:0.4s;
    &:hover{
        box-shadow:0px 20px 50px rgba(0,0,0,0.1);
    };
    ${StyledAvatar} {
      grid-area: avatar;
    };
    ${props => props.active && css`
      background-color:${props => props.theme.darkPurple};
      ${Name}, ${Time},${Status},${MessageText}{
        color:white
      };
      ${Status}, ${Time}{
        opacity:0.4;
      }
      ${activeBar({barwidth:'4px', shadowWidth:'14px'})}
    `}
    overflow: hidden;

`;
export default StyledMessageCard;
export {Name, Time, Status, Message, MessageText, UnreadBadge} 
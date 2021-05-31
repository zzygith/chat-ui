import styled, { css } from 'styled-components'
import Icon from '../Icon';
import Paragraph from '../Paragraph';
import Text from '../Text';

const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
    margin:6px;
    margin-left:24px;
    word-spacing:1rem;
`;

const BubbleTip = styled(Icon)`
    position:absolute;
    bottom:-15%;
    left:0;
    z-index:5;  // Let the Icon be coverd by Bubble

`;

const Bubble = styled.div`
    padding:15px 22px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    position:relative;
    z-index:10;
`;

const MessageText = styled(Text)`

`;

/* Set style for the ChatBubble sent by user-self. */
const typeVariants = {
    mine: css`
        ${Bubble}{
            background-color: ${props => props.theme.primaryColor};
        };
        ${BubbleTip}{
            transform: rotateY(180deg);  // Turn over the Icon
            left:unset;
            right:0;  // Move the Icon the right
            path{
                fill:${props=>props.theme.primaryColor}; // Change the color of the Icon
            };
        };
        ${Time}{
            text-align: right;
            margin-left: 0;
            margin-right: 24px;
        };
        ${MessageText}{
            color: white;
        };
    `

}


const StyledChatBubble = styled.div`
    display:flex;
    flex-direction: column;
    ${props=>props.type&&typeVariants[props.type]}
`;
export default StyledChatBubble;
export {Time, BubbleTip, Bubble, MessageText}
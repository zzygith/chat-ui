import styled, { css } from 'styled-components'
import StyledButton from '../Button/style';
import StyledIcon from '../Icon/style';
import StyledText from '../Text/style';

// Set style for the ChatBubble sent by user-self
const typeVariants = {
    mine: css`
      ${StyledButton} {
        background-color: white;
  
        ${StyledIcon} path {
          fill: ${props => props.theme.primaryColor};
        }
      }
      & > ${StyledIcon} path {
        fill: white;
      }
      & > ${StyledText} {
        color: white;
      }
    `,
  };

const StyledVoiceMessage = styled.div`
    display:flex;
    align-items: center;

    // Let the play Icon not shrink with change
    &>*:first-child{
        flex-shrink: 0;
    }

    &>*:not(:first-child){
        margin-left:16px;
    }

    ${props=>props.type && typeVariants[props.type]}
    
`;
export default StyledVoiceMessage;
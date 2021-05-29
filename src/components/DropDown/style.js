import styled, { css } from 'styled-components'
import StyledSeparator from '../Seperator/style'

const DropDownItem = styled.div`
    margin:12px 0;
    
`;

const DropDownContainer = styled.div`
position: absolute;
white-space:nowrap;
padding:4px 2px;
background-color: ${props=>props.theme.background};
box-shadow:0px 4px 32px rgba(0,0,0,0.08);
${StyledSeparator}{
    margin:-3px -26px;
    width:calc(100%+52px);

}

`;

const StyledDropDown = styled.div`
    position:relative;
    cursor:pointer
`;
export default StyledDropDown;
export {DropDownItem, DropDownContainer}
import styled, { css } from 'styled-components'

const IconContainer = styled.div`
    display:flex;
    align-items: center;
    margin-right: 16px;
    &>*{
        margin-left: 16px;
    }
`;


const StyledFooter = styled.footer`
    padding: 12px 0px;
    width:100%

`;
export default StyledFooter;
export {IconContainer}
import styled, { css } from 'styled-components'

const StyledLabelContainer = styled.label`
    display:flex;
    flex-direction:column;
    font-size: ${props=>props.theme.normal};
`;
export default StyledLabelContainer;
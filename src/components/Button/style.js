import styled, { css } from 'styled-components'


const shapeVariant = {
    circle: css`
    width:${props => props.size};
    height:${props => props.size};
    border-radius:50%;
    display:inline-flex;
    align-items:center;
    justify-content:center
    `,
    rect: css`
    padding:12px 18px;
    border-radius:6px;
    `
}

const typeVariant = {
    primary: css`
    background-color:${props => props.theme.primaryColor};
    color:white;
    `
}

const StyledButton = styled.button`
    border:none;
    outline:none;
    cursor:pointer;
    box-shadow: 0px 6px 12px rgba(0,0,0,0.1);
    ${props => typeVariant[props.type]};
    ${props => shapeVariant[props.shape]};
    ${props => css`
    background-color: ${props.bgColor}
    `}
`;
export default StyledButton;
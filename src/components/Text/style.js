import styled, { css } from 'styled-components'

const typeVariants = {
    primary: css`
    color:${props=>props.theme.grayDark};
    `,
    secondary: css`
    color:${props => props.theme.grayDark};
    opacity:0.3
    `,
    danger: css`
    color:${props=>props.theme.red}
    `
};

const sizeVariants = {
    normal: css`
    ${props=>props.theme.normal}
    `,
    medium: css`
    ${props => props.theme.medium}
    `,
    large: css`
    ${props=>props.theme.large}
    `,
    small: css`
    ${props=>props.theme.small}
    `

} ;


const StyledText = styled.span`
margin:0;
padding:0;
box-sizing:border-box; 
    font-size:${props => sizeVariants[props.size] || sizeVariants.normal};
    ${props => typeVariants[props.type]};
    ${props => props.bold && css`font-weight:700`}
`;
    

export default StyledText;
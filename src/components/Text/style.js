import styled, { css } from 'styled-components'

const typeVariants = {
    primary: props=>css`
    color:${props.theme.green};
    `,
};

const sizeVariants = {
    normal: props=>css`
    ${props.theme.normal};
    `,

} ;


const StyledText = styled.span(props => css`
    font-size:${sizeVariants[props.size] || sizeVariants.normal};
    ${typeVariants[props.type]};
    ${props.bold && `front-weight:500`}

`)
    

export default StyledText;
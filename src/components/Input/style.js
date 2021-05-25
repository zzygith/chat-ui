import styled, { css } from 'styled-components'

const Styledinput = styled.input(props => css`
outline:none;
display:block;
width:100%;
height:48px;
border:none;
background:none;
color:${props.theme.grayDark};
font-size:${props.theme.medium};
&::placeholder{
    color:${props.theme.gray3};
}

`)

const Prefix = styled.div`
margin-right:16px
`;

const Suffix = styled.div`
margin-left:16px;
`;

const InputContainer = styled.div`
display:flex;
align-items:center;

border-radius:24px;
padding:0 30px;
`;

export default Styledinput;
export { Prefix, Suffix, InputContainer };
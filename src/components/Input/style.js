import styled, { css } from 'styled-components'

const Styledinput = styled.input`
width:100%;
height:48px;
border:none;
background:none;

`;

const Prefix = styled.div``;

const Suffix = styled.div``;

const InputContainer = styled.div`
display:flex;
align-items:center;

border-radius:24px;
padding:0 30px;
`;

export default Styledinput;
export { Prefix, Suffix, InputContainer };
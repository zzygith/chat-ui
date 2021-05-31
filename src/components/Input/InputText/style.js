import styled, { css } from 'styled-components'

const InputUnderline = styled.input`
    border:none;
    border-bottom: 1px solid ${props=>props.theme.gray4};
    font-size: ${props => props.theme.normal};
    width:100%;
    background:none;
    outline:none;

    ::placeholder{
        color:${props=>props.theme.gray5};
    }

    :focus, :hover{
        border-bottom-color: ${props=>props.theme.primaryColor};
    }
`;

const StyledInputText = styled.div`
`;
export default StyledInputText;
export {InputUnderline}
import styled, { css } from 'styled-components'

const Contacts = styled.div`
    margin-top: -8px;   // Recover the margin-top of first element.
    &>*{
        margin:8px 0;
    }
`;

const StyledContactList = styled.div`
`;
export default StyledContactList;
export {Contacts}
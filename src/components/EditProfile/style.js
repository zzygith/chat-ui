import styled, { css } from 'styled-components'
import Text from '../Text';

const GroupTitle = styled(Text).attrs({ size: "large" })`
    align-self: flex-end;
`;


const SelectGroup = styled.div`
    >*{
        margin:0 4px;
    }
    margin: 0 -4px;
`;

const StyledEditProfile = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap:20px;
    padding: 30px;
    max-height: 100vh;
    overflow-y: auto;
`;
export default StyledEditProfile;
export {GroupTitle, SelectGroup}
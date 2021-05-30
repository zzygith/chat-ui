import styled, { css } from 'styled-components'
import StyledText from '../Text/style'


const Filters = styled.div`
`;

const Action = styled.div`
    justify-self:end;
    ${StyledText} {
        padding-right:1rem;
    }
`;

const StyledFilter = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
`;
export default StyledFilter;
export {Filters, Action}
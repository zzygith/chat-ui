import styled, { css } from 'styled-components'
import StyledText from '../Text/style';

const StyledParagraph = styled(StyledText)` // Inherit Text component and add some new styles
${props => props.ellipsis && css`
text-overflow:ellipsis;
white-space:nowrap;
overflow:hidden;
`}
`;
export default StyledParagraph;
import styled, { css } from 'styled-components'
import StyledText from '../Text/style';

const StyledParagraph = styled(StyledText)` //继承Text组件并新添一些样式
${props => props.ellipsis && css`
text-overflow:ellipsis;
white-space:nowrap;
overflow:hidden;
`}
`;
export default StyledParagraph;
import styled, { css } from 'styled-components'
import StyledText from '../Text/style';

const StyledParagraph = styled(StyledText)` //继承Text组件并新添一些样式
${props => props.ellipsis && css`
text-overflow:ellipsis;
white-space:nowrap;
overflow:hidden;
margin:0;
padding:0;
box-sizing:border-box
`}
`;
export default StyledParagraph;
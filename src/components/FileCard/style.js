import styled, { css } from 'styled-components'
import Icon from '../Icon';
import Heading from '../Heading'
import Paragraph from '../Paragraph';
import { card } from '../../utils/mixins'

const FileIcon = styled(Icon).attrs({ width: "60", height: "60" })`
  grid-area: icon;
  align-self:end;
  justify-self: start;
`;

const FileName = styled(Heading).attrs({ level: 3 })`
  margin:0;
  grid-area: name;
  align-self: center;
`;

const FileSize = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: size;
`;

const Time = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;


const StyledFileCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "icon name name"
    "icon size time";
  grid-template-columns: 74px 1fr 1fr;

`;
export default StyledFileCard;
export {FileIcon, FileName, FileSize, Time}
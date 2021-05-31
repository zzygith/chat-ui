import styled, { css } from 'styled-components'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { card } from '../../utils/mixins'

const NoteImage = styled.img`
    grid-area: image;
    width:60px;
    height:60px;
    
`;

const NoteTitle = styled(Heading).attrs({ level: 3 })`
    grid-area: title;
    margin:0;
    align-self: center;
`;

const NoteExcerpt = styled(Paragraph).attrs({ size: "small" })`
    grid-area: excerpt;
    align-self: center;
    white-space:nowrap;     //Show the content in one line.
    text-overflow: ellipsis;
    overflow: hidden;
`;

const NotePublishTime = styled(Paragraph).attrs({ type: "secondary" })`
    grid-area: time;
    justify-self: end;
`;

const StyledNoteCard = styled.div`
    ${card()};
    display:grid;
    grid-template-areas: "image title time"
                         "image excerpt excerpt";
    grid-template-columns: 72px 2fr 1fr;
`;
export default StyledNoteCard;
export {NoteImage, NoteTitle, NoteExcerpt, NotePublishTime}
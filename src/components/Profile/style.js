import styled, { css } from 'styled-components'
import Icon from '../Icon'

const ContactSection = styled.section`
    display: grid;
    row-gap: 18px;
`;

const AlbumSection = styled.div`
`;

const AlbumTitle = styled.div`
    justify-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>a{
        text-decoration: none;
        font-size: ${props=>props.theme.normal};
        color: ${props => props.theme.primaryColor};
    }
`;

const Album = styled.div`
    margin-top: 14px;
    justify-self:start;
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:10px;
`;

const Photo = styled.img`
width:76px;
height: 76px;
object-fit: cover;
`;

const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
    position:absolute;
    right:30px;
    top:30px;
    cursor:pointer;
`;

const StyledProfile = styled.div`
    display:grid;
    align-content: start;
    justify-content: center;
    justify-items: center;
    position: relative;
    padding:30px;
    height: 100vh;
    margin-top: 2vh;
    overflow-y: auto;
`;
export default StyledProfile;
export {ContactSection, AlbumSection, AlbumTitle, Album, Photo, CloseIcon}
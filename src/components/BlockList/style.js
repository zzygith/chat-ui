import styled, { css } from 'styled-components'
import Avatar from '../Avatar';
import StyledText from '../Text/style';
import Text from '../Text';
import Icon from '../Icon'

const BlockedAvatar = styled(Avatar)`
grid-area:avatar;

`;

const BlockedName = styled(Text).attrs({ size: "xlarge" })`
grid-area:name;
margin-top:20px
`;

const CloseIcon = styled(Icon)`
    grid-area:2/3/5/4;  // Show at the right bottom corner.
    margin-top:20px;
    z-index:10;
`;

const ClosableAvatar = styled.div`
    display:grid;
    grid-template-areas:"avatar avatar avatar"
                        "avatar avatar avatar"
                        "avatar avatar avatar"
                        "name name name";
    justify-items:center
`;


const SettingsMenu = styled.div`
    height:148px;
    display:grid;
    grid-template-columns: 10px 1fr;    //Left is for back icon, right is for menu name
    align-items: center;
    ${StyledText}{
        justify-self:center;
    }
`;

const FriendList = styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    row-gap:24px;
    justify-items:center;
`;


const StyledBlockList = styled.div`
    padding:2vh 4vw
`;

export default StyledBlockList;
export {SettingsMenu, BlockedAvatar, BlockedName, CloseIcon, ClosableAvatar, FriendList}
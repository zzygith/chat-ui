import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components'
import { activeBar } from '../../utils/mixins';
import StyledAvatar, {StatusIcon} from '../Avatar/style';

const StyledMenuItem = styled.div`
  & > a {
      width:100%;
      height:74px;
      display: flex;  
      align-items: center;    
      justify-content: center;
      ${activeBar()};
      ${(props) => (props.active ? "" : css`::before,::after {height:0}`)};
      &:hover{
        ::before,::after{
          height: 100%;
        };
      svg{
        transform: scale(1.2);
        opacity: 1;
        };
      }
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  color:white;
  font-size:24px;
  opacity:${props => (props.active ? 1 : 0.3)};
  transform: scale(1);
  transition: 0.4s;
`;

const StyledNavBar = styled.nav`
  display: grid;             //grid layout
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color:#292F4C;

  ${StyledAvatar} {
    justify-self: center;
    align-self: center;
    ${StatusIcon} {
      &::before {
        background-color:#292F4C;
      }
    }
  }
`;



const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(74px, 88px)) 1fr;   //minmax配合grid使用，每行高度在最小最大值之间
`;

export default StyledNavBar;

export{ StyledMenuItem, MenuIcon, MenuItems }
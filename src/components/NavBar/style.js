import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components'
import { activeBar } from '../../utils/minins';
import StyledAvatar, {StatusIcon} from '../Avatar/style';

const StyledMenuItem = styled.div`
& > a {
    width:100%;
    height:74px;
    display: flex;  
    align-items: center;    
    justify-content: center;
    ${activeBar()};
    ${(props) => (props.active ? "" : `::before,::after {height:0}`)}
}
`;

const MenuIcon = styled(FontAwesomeIcon)`
color:white;
font-size:24px;
opacity:${props=>(props.active?1:0.3)};
`;



const StyledNavBar = styled.nav`
  display: grid;             //grid网格化布局
  grid-template-rows: 1fr 4fr;     //让第一行占五份一，第二行占五份4，同类还有grid-template-columns
  width: 100px;
  height: 100vh;
  background-color:#292F4C;
  padding: 30px 0;

  ${StyledAvatar} {    //设置StyledNavBar里面Avatar的样式，就是选中styled-component包装过得组件，不是avatar本身（因为从本质上讲，avatar组件执行后返回了一堆styled组件，其实是不存在avatar组件的）
    justify-self: center;
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
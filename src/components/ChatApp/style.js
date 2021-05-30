import styled, { css } from 'styled-components'

const Nav = styled.nav`
    flex-shrink:0;    
`;

const Sidebar = styled.aside`
    max-width:448px;
    min-width:344px;
    height:100vh;
    flex:1;
    background-color: ${props=>props.theme.gradiantGray};
`;

const Content = styled.main`
    flex:2;
`;

const Drawer = styled.div`
    max-width:310px;
    width:0;
    ${props => props.show && css`
        width:310px;
    ` }
`;

const StyledChatApp = styled.div`
    display: flex;
    height: 100vh;
    width:100vw;
    overflow:hidden;
    position:relative;
`;

export default StyledChatApp;
export {Nav, Sidebar, Content, Drawer}
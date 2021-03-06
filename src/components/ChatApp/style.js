import styled, { css } from 'styled-components'

const Nav = styled.nav`
    flex-shrink:0;      // Not allowed to shrink.
    position: relative;   
    z-index:100;
`;

const Sidebar = styled.aside`
    max-width:448px;
    min-width:344px;
    height:100vh;
    flex:1;     // Set the area ratio.
    background-color: ${props => props.theme.gradiantGray};
    
    position: relative;
    z-index:50;
    
    >div{
        will-change: transform, opacity;
        position: absolute; 
        width: 100%;
    }

`;

const Content = styled.main`
    flex:2;
`;

const Drawer = styled.div`
    max-width:310px;
    width:0;
    transition: width 0.4s;
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
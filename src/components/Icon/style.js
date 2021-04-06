import styled, { css } from 'styled-components'


const StyledIcon = styled.div`
display:inline-flex;
align-items:center;
justify-content:center;

/* svg,
svg *{
     ${props=>(props.color?`fill:${props.color}`:"")};
     ${props=>(props.opacity?`opacity:${props.opacity}`:"")};
} */  // 如果传入值，则重新设置为传入值，否则使用默认值。下面的做法是自己用的，存在修改默认值问题

svg,
svg *{
     fill:${props=>(props.color?props.color:"none")};
     opacity:${props=>(props.opacity?props.opacity:"none")};
}

`;



export default StyledIcon;
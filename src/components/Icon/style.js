import styled, { css } from 'styled-components'


const StyledIcon = styled.div`
display:inline-flex;
align-items:center;
justify-content:center;

svg,
svg *{
     ${props=>(props.color?`fill:${props.color}`:"")};
     ${props=>(props.opacity?`opacity:${props.opacity}`:"")};
}

// If there is new passed-in value, then reset as the passed-in value. Otherwise use the default. Below is wrong. 
/* svg,
svg *{
     fill:${props=>(props.color?props.color:"none")};
     opacity:${props=>(props.opacity?props.opacity:"none")};
} */

`;



export default StyledIcon;
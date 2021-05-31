import styled, { css } from 'styled-components'


/* There are two kinds of Badges, one is to show how many unread messages, the other is for thumbnail icon */
const variants = {
    dot: css`
        position:relative;
        padding:5px;
        ::after{    // Show on the thumbnail icon.
            display:${props => (props.show ? "block" : "none")};
            content:"";
            position:absolute;
            right:0;
            top:0;
            width:6px;
            height:6px;
            border-radius:50%;
            background-color: red;
        }
    `,
    default: css`
        width:26px;
        height:26px;
        border-radius:50%;
        background-color: red;
        display:flex;
        align-items:center;
        justify-content:center;
        ${props=>!props.showZero&&props.count===0&&`visibility:hidden`}
    `
}

const Count = styled.div`
    font-size:14px;
    color:white
`;


const StyledBadge = styled.div`
display:inline-block;
${props=>variants[props.variant]};
`;


export default StyledBadge;
export {Count}
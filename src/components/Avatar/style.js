import styled, { css } from 'styled-components'

/* The background of online/offline status icon */
const circleMixinFunc = (color,size='8px') => css`
    content:"";  // It won't show without this content style.
    display:block;
    position:absolute;  // Let the icon show at the top left corner.
    width:${size};
    height:${size};
    border-radius:50%;
    background-color: ${color};
`;

const StyledAvatar = styled.div`
    position:relative;
`;

const StatusIcon = styled.div`
    position:absolute;
    top:4px;
    left:2px;
    ::before{
        ${(props)=>circleMixinFunc("white",props.size)}
        transform:scale(2)
    }

    ::after{
        ${ (props)=> {
        if (props.status=== 'online') {
            return circleMixinFunc(props.theme.green, props.size)
        }
        else if (props.status === 'offline') {
            return circleMixinFunc(props.theme.gray, props.size)
        }
        }
        }
    }
`;

const AvatarClip = styled.div`
        width:${props=>props.size};
        height:${props=>props.size};
        border-radius:50%;  // Set the avatar as circle.
        overflow:hidden     // Hide the avatar image going beyond clip box.
    `;
    const AvatarImage = styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center;
`;

export default StyledAvatar;
export{StatusIcon, AvatarClip, AvatarImage}
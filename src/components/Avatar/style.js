import styled, { css } from 'styled-components'

const circleMixinFunc = (color,size='8px') => css`
    content:"";
    display:block;
    position:absolute;
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
border-radius:50%; //设置圆形头像方法：正方形，border-radius:50%，此时图片可能超出边框，再把overflow：hidden
overflow:hidden
`;
const AvatarImage = styled.img`
width:100%;
height:100%; //解决图片过大，这样让图片和外层盒子一样大
object-fit:cover;  //css3设置图片视频与容器的关系，cover是自动等比例缩放填满容器
object-position:center;  //居中

`;

export default StyledAvatar;
export{StatusIcon, AvatarClip, AvatarImage}
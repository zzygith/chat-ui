import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import React from 'react'
import NavBar, { MenuItem } from "."
import "styled-components/macro"


export default {
    title: "NavBar",
    component: NavBar
};


export const Defualt = () => <NavBar />
export const Menu = () => {
    return (<div css={`background-color:purple;
    width:100px;
    `}>
        <MenuItem showBage active icon={faCommentDots} />
    </div>)
    
    
}



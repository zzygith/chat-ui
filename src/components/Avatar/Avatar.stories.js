import React from 'react'
import Avatar from "."
import face1 from '../../assests/images/face-male-1.jpg'
import face2 from '../../assests/images/face-male-2.jpg'
import face3 from '../../assests/images/face-male-3.jpg'
import face4 from '../../assests/images/face-male-4.jpg'
import './story.css'

export default {
    title: 'UI/Avatar',
    component: Avatar
};

export const Defualt = () => {
    return <Avatar src={face1} status="online" />;
}



// Show different Avatars with different sizes.
export const Sizes = () => {
    return (
    <div className="row-elements">
        <Avatar src={face2} size="48px" status="online"/>
        <Avatar src={face3} size="48px" status="offline"/>
        <Avatar src={face4} size="32px" status="offline"/>
    </div>)
    

}

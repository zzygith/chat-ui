import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Badge from "."


export default {
    title: "UI/Badge",
    component: Badge
};


export const Defualt = () => <Badge count={5} />

export const Dotvar = () => {
    return <Badge show variant='dot'>
    <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'24px'}} />
</Badge>}




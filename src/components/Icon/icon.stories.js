import React from 'react'
import Icon from "."
import {ReactComponent as SmileIcon} from "../../assests/icons/smile.svg"


export default {
    title: "UI/Icon",
    component: Icon
};


export const Defualt = () => {
    return <Icon icon={SmileIcon} />
}

export const Defualt22 = () => {
    return <Icon icon={SmileIcon} width={55} height={55} color="#cccccc"/>
}


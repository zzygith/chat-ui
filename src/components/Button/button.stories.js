import React from 'react'
import Button from "."
import {ReactComponent as Plus} from "../../assests/icons/plus.svg"
import Icon from "../Icon/index"


export default {
    title: "UI/Button",
    component: Button
};


export const Defualt = () => <Button shape="rect">默认按钮</Button>;

export const CircleButton = () => (
    <Button>
        <Icon icon={Plus} width={12} height={12} color="white" />
    </Button>
)




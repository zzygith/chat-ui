import React from 'react'
import Text from "."


export default {
    title: "Text",
    component: Text
};


export const Defualt = () => <Text>默认</Text>;
export const Secondary = () => <Text type="secondary">次要文本</Text>;
export const Medium = () => <Text size="medium" bold>加粗</Text>;





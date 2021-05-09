import React from 'react'
import Paragraph from "."


export default {
    title: "Paragraph",
    component: Paragraph
};


export const Defualt = () =>
    <>
        <Paragraph>默认</Paragraph>
        <Paragraph>二默认</Paragraph>
    </>;

export const Ellips = () =>
    <Paragraph ellipsis>啛啛喳喳错错错错错错错错错凄凄切切群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群错错错错错错错错错错错错错错错错错错错错错错错错错错错错啛啛喳喳错错错错错错错错错错错错错错错</Paragraph>




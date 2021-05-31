import React from 'react'
import Input from "."

export default {
    title: "Page/Input",
    component: Input
};


export const Defualt = () => <Input placeholder="ererere"/>
export const Search = () => <Input.Search />
export const InputTextWithLabel= ()=><Input.Text label="Name"/>;



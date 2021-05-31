import React from 'react'
import ChatBubble from "."
import VoiceMessage from "../VoiceMessage"


export default {
    title: "UI/ChatBubble",
    component: ChatBubble
};


export const Defualt = () => <ChatBubble time="Yesterday 14:26 PM">默认默认默认默认</ChatBubble>
export const Defualt2 = () => <ChatBubble time="Yesterday 14:26 PM" type="mine">默认默认默认默认</ChatBubble>
export const WithVoice = () =>
    <ChatBubble time="Yesterday 14:26 PM" >
        <VoiceMessage time="01:24" />
    </ChatBubble>
export const WithVoiceMine = () =>
    <ChatBubble time="Yesterday 14:26 PM" type="mine">
        <VoiceMessage type="mine" time="01:24" />
    </ChatBubble>

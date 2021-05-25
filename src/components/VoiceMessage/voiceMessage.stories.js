import React from 'react'
import VoiceMessage from "."


export default {
    title: "VoiceMessage",
    component: VoiceMessage
};

export const Defualt1 = () => <VoiceMessage time="01:25" />
export const Defualt2 = () => <VoiceMessage type="mine" time="01:25" />




import React from 'react'
import MessageCard from "."
import face1 from "../../assests/images/face-male-1.jpg"


export default {
    title: "UI/MessageCard",
    component: MessageCard
};


export const Defualt = () => (<MessageCard
    avatarSrc={face1}
    name="Tobias Williams"
    avatarStatus="online"
    statusText="online"
    time="3h ago"
    message="Do not, for one repulse, forgo the purpose that you resolved to effort."
    unreadCount={2}
/>
);

export const Defualt2 = () => (<MessageCard
  active
  avatarSrc={face1}
  name="Tobias Williams"
  avatarStatus="online"
  statusText="online"
  time="3h ago"
  message="Do not, for one repulse, forgo the purpose that you resolved to effort."
  unreadCount={2}
/>
);
export const Defualt3 = () => (<MessageCard
  replied
  avatarSrc={face1}
  name="Tobias Williams"
  avatarStatus="online"
  statusText="online"
  time="3h ago"
  message="Do not, for one repulse, forgo the purpose that you resolved to effort."
  unreadCount={2}
/>
);


import React from "react";
import ChatItem from "./ChatItem";
const Chats = [
  {
    id: 1,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 2,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 3,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 4,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 5,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 6,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 7,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 8,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 9,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 10,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 11,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
  {
    id: 12,
    name: "Dio Lupa",
    latestMessage: "Remaining Reason",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    date: "Jun 12, 22",
  },
];

const ChatList = () => {
  return (
    <ul className="list mt-4 bg-base-100 overflow-y-auto h-full rounded-box">
      {Chats.map((chat) => (
        <ChatItem key={chat.id} chatItem={chat} />
      ))}
    </ul>
  );
};

export default ChatList;

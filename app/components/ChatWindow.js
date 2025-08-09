import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatMessageWindow from "./ChatMessageWindow";

const ChatWindow = () => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr] w-full">
      <ChatWindowHeader />
      <ChatMessageWindow />
    </div>
  );
};

export default ChatWindow;

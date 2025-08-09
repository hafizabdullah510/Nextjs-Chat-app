import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import ChatMessagesSearch from "./ChatMessagesSearch";
import ChatList from "../components/ChatList";

const ChatMessages = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_auto_1fr] w-full px-4 md:py-8 xl:border-r xl:border-base-300 xl:w-120">
      <div className="flex justify-between items-center hidden md:flex">
        <h1 className="text-lg md:text-4xl font-semibold">Chats</h1>
        <button className="$$btn $$btn-circle cursor-pointer">
          <AiFillPlusCircle className="w-6 h-6" />
        </button>
      </div>
      <div className="md:mt-8">
        <ChatMessagesSearch />
      </div>
      <ChatList />
    </div>
  );
};

export default ChatMessages;

import React from "react";
import Image from "next/image";
const ChatItem = ({ chatItem }) => {
  const { name, latestMessage, avatar, date } = chatItem;
  return (
    <li className="list-row rounded-none items-center border-b border-base-300">
      <div>
        <Image
          src={avatar}
          className="rounded-full"
          width={50}
          height={50}
          alt="user-avatar"
        />
      </div>
      <div className="list-col-grow">
        <p>{name}</p>
        <div className="text-xs uppercase font-semibold opacity-60 mt-2">
          {latestMessage}
        </div>
      </div>
      <div className="text-base-content flex flex-col items-end">
        <div className="text-xs uppercase font-semibold opacity-60">{date}</div>
        <span className="badge badge-sm text-primary bg-base-100 border-base-300 mt-2 pointer-events-none">
          3
        </span>
      </div>
    </li>
  );
};

export default ChatItem;

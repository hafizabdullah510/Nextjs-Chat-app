import React from "react";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

const ChatWindowHeader = () => {
  return (
    <div className="px-4 py-2 md:py-4 bg-base-100">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="xl:hidden btn btn-ghost p-0 hover:bg-transparent hover:border-transparent">
            <IoArrowBack className="w-6 h-6" />
          </button>
          <Image
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            className="rounded-full"
            width={50}
            height={50}
            alt="user-avatar"
          />
        </div>
        <div className="list-col-grow">
          <p className="font-semibold">Abdullah</p>
          <div className="text-xs uppercase font-semibold opacity-60 text-primary">
            Online
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindowHeader;

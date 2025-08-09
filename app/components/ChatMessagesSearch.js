import { useState } from "react";

const ChatMessagesSearch = () => {
  return (
    <label className="input w-full rounded-lg h-12 !outline-none">
      <svg
        className="h-[1.5em] opacity-50 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="text-sm md:text-lg "
        placeholder="Search"
      />
    </label>
  );
};

export default ChatMessagesSearch;

import {
  FaMicrophone,
  FaBold,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";

const ChatWindowSearch = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="flex items-center w-[90%] rounded-lg bg-base-100 shadow-md px-3 py-2 gap-2">
        {/* Left icons */}
        <FaMicrophone className="w-5 h-5 text-secondary cursor-pointer" />

        {/* Input field */}
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-transparent outline-none text-sm md:text-lg"
        />
        <FaBold className="w-5 h-5 text-secondary cursor-pointer" />
        <FaPaperclip className="w-5 h-5 text-secondary cursor-pointer" />
        {/* Send button */}
        <button className="btn btn-sm btn-primary rounded-lg px-3">
          <FaPaperPlane className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindowSearch;

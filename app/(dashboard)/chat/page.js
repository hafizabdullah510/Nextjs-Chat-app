"use client";
import { useEffect, useState } from "react";
import { socket } from "../../socket.js";
import ChatMessages from "../../components/ChatMessages.js";
import ChatWindow from "../../components/ChatWindow.js";
import toast from "react-hot-toast";

export default function Chat() {
  const [selectedId, setSelectedId] = useState(1232);

  useEffect(() => {
    if (socket) {
      onConnect();
    }

    async function onConnect() {
      socket.connect();
    }

    return () => {
      socket.off("connect", onConnect);
      socket.disconnect();
    };
  }, []);

  // const callApi = async () => {
  //   try {
  //     const response = await fetch("/api/chat");
  //     const data = await response.json();
  //     if (!response.ok) {
  //       toast.error(data.message || "Failed to fetch messages");
  //     }
  //     console.log("API response:", data);
  //   } catch (error) {
  //     toast.error("Network error: " + err.message);
  //   }
  // };

  return (
    <div className="h-full grid grid-cols-1 xl:grid-cols-[auto_1fr]">
      <div className={`${selectedId ? "hidden" : "block"} xl:block h-full`}>
        <ChatMessages />
      </div>
      <div className={`${selectedId ? "block" : "hidden"} xl:block h-full`}>
        <ChatWindow />
      </div>
    </div>
  );
}

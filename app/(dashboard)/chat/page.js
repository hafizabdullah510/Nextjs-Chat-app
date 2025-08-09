"use client";
import { useEffect, useState } from "react";
import { socket } from "../../socket.js";
import toast from "react-hot-toast";

export default function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (socket) {
      onConnect();
    }

    async function onConnect() {
      socket.connect();
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.disconnect();
    };
  }, []);

  const callApi = async () => {
    try {
      const response = await fetch("/api/chat");
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Failed to fetch messages");
      }
      console.log("API response:", data);
    } catch (error) {
      toast.error("Network error: " + err.message);
    }
  };

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <button className="btn" onClick={callApi}>
        Send event
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import io from "socket.io-client";

export function useSocket(roomId, userId) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    console.log(roomId,userId);
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
      transports: ["websocket"],
      path: "/socket",
      auth: { userId },
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected");
      newSocket.emit("join_room", roomId.toString());
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    newSocket.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.off("connect");
      newSocket.off("disconnect");
      newSocket.off("receive_message");
      newSocket.disconnect();
    };
  }, [roomId, userId]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ROUT_URL}/chat/messages/${roomId}`
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    fetchMessages();
  }, []);

  const sendMessage = (input) => {
    if (input.trim() && socket) {
      const messageData = {
        chatRoomId: parseInt(roomId),
        senderId: parseInt(userId),
        content: input,
      };
      socket.emit("send_message", messageData);
    }
  };

  return { socket, messages, sendMessage };
}

import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Здравствуйте! Чем могу помочь?", sender: "developer" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = { text: inputMessage, sender: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setInputMessage("");

      setTimeout(() => {
        const reply = generateSmartReply(inputMessage);
        setMessages((prev) => [...prev, { text: reply, sender: "developer" }]);
      }, 800);
    }
  };

  const generateSmartReply = (message) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("привет") || lowerMsg.includes("здравствуйте") || lowerMsg.includes("добрый день")) {
      return "Здравствуйте! Рады вас видеть 👋 Чем могу помочь?";
    }

    if (lowerMsg.includes("цена") || lowerMsg.includes("стоимость")) {
      return "Наши дома начинаются от 6 900 000 ₽. Хотите, подберу вам варианты?";
    }

    if (lowerMsg.includes("дом") || lowerMsg.includes("проекты") || lowerMsg.includes("варианты")) {
      return "У нас более 30 видов домов! Расскажите, какой именно вас интересует?";
    }

    if (lowerMsg.includes("спасибо")) {
      return "Всегда рад помочь! 😊";
    }

    if (lowerMsg.includes("пока") || lowerMsg.includes("до свидания")) {
      return "До встречи! Хорошего дня 🌟";
    }

    if (lowerMsg.length <= 2 || /^[0-9]+$/.test(lowerMsg)) {
      return "Не совсем понял вас 🙈 Можете уточнить?";
    }

    const defaultReplies = [
      "Отличный вопрос! Сейчас уточню и вернусь к вам.",
      "Работаем над вашим запросом 💼",
      "Могу я получить больше деталей, чтобы лучше вам помочь?",
      "Супер! Давайте обсудим подробнее.",
    ];
    return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-fullscreen">
      <div className="chat-header">
        <h1>UBBHomes</h1>
        <p>Онлайн: разработчик и глава компании</p>
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Напишите сообщение..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>➤</button>
      </div>
    </div>
  );
};

export default Chat;

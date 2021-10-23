import styles from "./Chat.module.css";
import { useState } from "react";
import Avatar from "./Avatar";

function Chat(props) {
  const userName = "ruy";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Oi ruy.",
      origin: "caio",
      destination: "ruy",
      date: "15/10/2021",
      time: "22:00",
    },
    {
      message: "Oi Caio.",
      origin: "ruy",
      destination: "caio",
      date: "15/10/2021",
      time: "22:00",
    },
    {
      message: "Tudo bem?",
      origin: "caio",
      destination: "ruy",
      date: "15/10/2021",
      time: "22:00",
    },
    {
      message: "Tudo sim, e você?",
      origin: "ruy",
      destination: "caio",
      date: "15/10/2021",
      time: "22:00",
    },
    {
      message: "Estou bem também!",
      origin: "caio",
      destination: "ruy",
      date: "15/10/2021",
      time: "22:00",
    },
  ]);

  /* Put here sende menssage logic */
  function sendMessage(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("message")) {
      const obj = {
        message: formData.get("message"),
        origin: "",
        destination: userName,
        date: "",
        time: "",
      };
      setMessages([...messages, obj]);
      setMessage("");
    }
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <Avatar name="Ruy" />
        <h1>Ruy</h1>
      </div>

      <div className={styles.chat_body}>
        {messages.map((message, i) => {
          return (
            <p
              key={`ms_${i}`}
              className={
                message.destination === userName
                  ? styles.chat_message_In
                  : styles.chat_message_Out
              }
            >
              {message.message}
            </p>
          );
        })}
      </div>

      <div className={styles.chatFooter}>
        <form
          onSubmit={sendMessage}
          method="post"
          id="message"
          className={styles.form}
        >
          <input
            name="message"
            placeholder="Degite sua menssagem"
            type="text"
            id="message"
            className={styles.messageInput}
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.sendBtn}></button>
        </form>
      </div>
    </div>
  );
}

export default Chat;

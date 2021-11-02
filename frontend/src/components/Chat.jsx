import styles from "./Chat.module.css";
import { useState, useEffect } from "react";
import Avatar from "./Avatar";


function Chat(props) {
  const userName = props.userName;
  const API_SEND_MESSAGE = `${process.env.NEXT_PUBLIC_API}/message`
  const API_GET_MESSAGE = `${process.env.NEXT_PUBLIC_API}/chat`

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  /* Obter mensagens */
  useEffect(() => {
    fetch(API_GET_MESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username_origin": userName, "username_destination": props.currentChat }),
    })
      .then(async (response) => {
        const responseData = await response.json();
        setMessages([...responseData])
      })
  }, [props.currentChat])

  /* Enviar mensagem */
  async function sendMessage(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = {
      "username_origin": userName,
      "username_destination": props.currentChat,
      "message": formData.get("message")
    }

    await fetch(API_SEND_MESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).then(async (response) => {
      const responseStatus = response.status
      const respondeData = await response.json();

      if (responseStatus === 201) {
        const new_message = {
          origin: message.username_origin,
          destination: message.username_destination,
          message: message.message
        }
        setMessages([...messages, new_message])
      }
    })

    setMessage("");

    /* if (formData.get("message")) {
      const obj = {
        message: formData.get("message"),
        origin: "",
        destination: userName,
        date: "",
        time: "",
      };
      setMessages([...messages, obj]);
      setMessage("");
    } */
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <Avatar name={props.currentChat} />
        <h1>{props.currentChat}</h1>
      </div>

      <div className={styles.chat_body}>
        {
          messages.slice().reverse().map((message, i) => {
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
            placeholder="Digite sua menssagem"
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

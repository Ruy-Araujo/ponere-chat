import styles from '../styles/App.module.css';
import { useState } from 'react';

const app = (props) => {
  /* Data for teste proposes */
  const userName = 'ruy';
  const names = ['Ruy', 'Igor', 'Camilla', 'Goya'];
  const [messages, setMessages] = useState([
    {
      message: 'Oi ruy.',
      origin: 'caio',
      destination: 'ruy',
      date: '15/10/2021',
      time: '22:00',
    },
    {
      message: 'Oi Caio.',
      origin: 'ruy',
      destination: 'Caio',
      date: '15/10/2021',
      time: '22:00',
    },
    {
      message: 'Tudo bem?',
      origin: 'Caio',
      destination: 'ruy',
      date: '15/10/2021',
      time: '22:00',
    },
    {
      message: 'Tudo sim, e você?',
      origin: 'ruy',
      destination: 'Caio',
      date: '15/10/2021',
      time: '22:00',
    },
    {
      message: 'Estou bem também!',
      origin: 'Caio',
      destination: 'ruy',
      date: '15/10/2021',
      time: '22:00',
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      message: formData.get('message'),
      origin: '',
      destination: userName,
      date: '',
      time: '',
    };
    setMessages([...messages, obj]);
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.contacts}>
          {names.map((e) => {
            return (
              <li id={new Date().getTime().toString()}>
                <a href='#' className={styles.contact}>
                  {e}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.chatContainer}>
          <div className={styles.chatHead}>
            <span>Ruy</span>
          </div>
          <ul className={styles.messageBox}>
            {messages.map((e) => {
              return (
                <div className={e.origin === userName ? styles.messageRight : styles.messageLeft}>
                  <li className={e.origin === userName ? styles.messageOut : styles.messageIn}>
                    {e.message}
                  </li>
                </div>
              );
            })}
          </ul>
          <div className={styles.chatFooter}>
            <form onSubmit={handleSubmit} method='post' id='message' className={styles.form}>
              <input
                name='message'
                placeholder='Degite sua menssagem'
                type='text'
                id='message'
                className={styles.messageInput}
                autoComplete='off'
              />
              <button type='submit' className={styles.sendBtn}></button>
            </form>
          </div>
        </div>
      </div>

      <a href='#' className={styles.float}>
        <i className={styles.myFloat}></i>
      </a>
    </>
  );
};

export default app;

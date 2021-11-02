import styles from "../styles/App.module.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Head from "next/dist/shared/lib/head";
import { useState } from "react";
import nookies from 'nookies'

const App = (props) => {
  const userName = `${props.userProps.userName}`
  const [currentChat, setCurrentChat] = useState("Ponere Chat")

  const setChat = chat => {
    setCurrentChat(chat)
  }

  return (
    <>
      <Head>
        <title>Ponere Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.container}>
        <Sidebar userName={userName} setChat={setChat} />
        <Chat userName={userName} currentChat={currentChat} />
      </div>
    </>
  );
};

export default App;

/* Conteudo carregado antes da pagina */
export async function getServerSideProps(context) {
  const cookies = nookies.get(context);


  if (cookies.userProps) {
    const userProps = JSON.parse(cookies.userProps)
    return { props: { userProps } }
  }

  /* Redirect caso não estaja logado */
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}





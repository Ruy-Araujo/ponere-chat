import styles from "../styles/App.module.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Head from "next/dist/shared/lib/head";

const App = (props) => {
  return (
    <>
      <Head>
        <title>Ponere Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.container}>
        <Sidebar />
        <Chat />
      </div>
    </>
  );
};

export default App;

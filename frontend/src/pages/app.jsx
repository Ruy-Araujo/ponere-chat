import styles from "../styles/App.module.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const App = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Chat />
      </div>
    </>
  );
};

export default App;

import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
import { useState } from "react";

function Sidebar(props) {
  const [names, setNames] = useState(["Ruy", "Igor", "Camilla", "Goya"]);
  const [name, setName] = useState("");

  /* Put here add chat roon logic */
  function addNick(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("nickName")) {
      const nick = formData.get("nickName");
      setNames([...names, nick]);
      setName("");
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.menu}>
        <form onSubmit={addNick} method="post" id="addNick">
          <input
            type="text"
            placeholder="Digite o nick do seu amigo"
            id="nickName"
            name="nickName"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" />
        </form>
      </div>

      <div className={styles.chat_list}>
        {names.map((name, i) => {
          return (
            <div className={styles.chat_info} key={`ch_${i}`}>
              <Avatar name={name} />
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

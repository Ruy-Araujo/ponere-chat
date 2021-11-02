import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
import { useState, useEffect } from "react";

function Sidebar(props) {
  const userName = props.userName
  const [names, setNames] = useState(["Ponere Chat"]);
  const [name, setName] = useState("");
  const API_FRIENDS = `${process.env.NEXT_PUBLIC_API}/friend`
  const API_ADD_FRIEND = `${process.env.NEXT_PUBLIC_API}/friend/add`

  /* Obter amigos */
  useEffect(() => {
    fetch(API_FRIENDS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username": userName }),
    })
      .then(async (response) => {

        const responseData = await response.json();
        if (responseData.friends) {
          setNames([...names, ...responseData.friends,])
        }
      })
  }, [])

  /* ------------------- Adicionar amigos ------------------- */
  function addFriend(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nickName = formData.get("nickName")

    fetch(API_ADD_FRIEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username_destination": userName, "username_origin": nickName }),
    }).then(async (response) => {
      const responseStatus = response.status
      const respondeData = await response.json();

      switch (responseStatus) {
        case 200:
          setNames([...names, nickName]);
          setName("");
          break
        default:
          console.log("erro")
          setName("");
      }
    })
  }

  function openChat(name) {
    props.setChat(name)
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.menu}>
        <form onSubmit={addFriend} method="post" id="addNick">
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
            <a className={styles.chat_info} key={`ch_${i}`} onClick={() => openChat(name)} value={name}>
              <Avatar name={name} />
              <h2>{name}</h2>
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

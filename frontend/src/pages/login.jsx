import styles from "../styles/Login.module.css";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import { useRouter } from "next/router";
import nookies from 'nookies'


export default function Login() {
  const API_LOGIN = `${process.env.NEXT_PUBLIC_API}/sign-in`
  const router = useRouter();

  /* Responsavel por realizar o request de login  */
  function loginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName")

    fetch(API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username": userName, "password": formData.get("password") }),
    }).then(async (response) => {
      const respondeData = await response.json();
      console.log(respondeData.login)

      /* Logica de login */
      if (respondeData.login) {
        nookies.set(null, 'userProps', JSON.stringify({ "userName": userName }), {
          maxAge: 300,
          path: '/',
        })
        router.push("/app")
      }
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <h1>LOGIN</h1>
        <form
          onSubmit={loginSubmit}
          method="post"
          id="login"
          className={styles.form}
        >
          <input
            name="userName"
            placeholder="Usuário"
            type="text"
            id="userName"
            className={styles.input}
          />
          <input
            name="password"
            placeholder="Senha"
            type="password"
            id="password"
            className={styles.input}
          />
          <span className={styles.span}>
            Não possui cadastro?
            <Link href="/register" passHref>
              <a className={styles.link}>cadastre-se</a>
            </Link>
          </span>

          <button type="submit" className={styles.btnPrimary}>
            login
          </button>

          <Link href="/" passHref>
            <button className={styles.btnSecundary}>voltar</button>
          </Link>
        </form>
      </main>
    </div>
  );
}



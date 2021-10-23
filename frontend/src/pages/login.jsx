import styles from "../styles/Login.module.css";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";

export default function Login() {
  /*
  Responsavel por realizar o request de login
   */

  function loginSubmit(e) {
    e.preventDefault();
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
          <Link href="/app" passHref>
            <button type="submit" className={styles.btnPrimary}>
              login
            </button>
          </Link>
          <Link href="/" passHref>
            <button className={styles.btnSecundary}>voltar</button>
          </Link>
        </form>
      </main>
    </div>
  );
}

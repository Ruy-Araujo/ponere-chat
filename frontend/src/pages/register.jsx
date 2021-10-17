import styles from '../styles/Register.module.css';
import Head from 'next/dist/shared/lib/head';
import Link from 'next/link';

export default function Register() {
  /*
  Responsavel por realizar o request de registro
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log('foi');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>cadastro</h1>
        <form onSubmit={handleSubmit} method='post' id='login' className={styles.form}>
          <input
            name='userName'
            placeholder='Usuario'
            type='text'
            id='userName'
            className={styles.input}
          />
          <input
            name='password'
            placeholder='Senha'
            type='password'
            id='password'
            className={styles.input}
          />
          <span className={styles.span}>
            Já possui cadastro?
            <Link href='/login' passHref>
              <a className={styles.link}>faça login</a>
            </Link>
          </span>
          <button type='submit' className={styles.btnPrimary}>
            registrar
          </button>
          <Link href='/' passHref>
            <button className={styles.btnSecundary}>voltar</button>
          </Link>
        </form>
      </main>
    </div>
  );
}

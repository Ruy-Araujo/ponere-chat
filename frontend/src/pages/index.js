/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Simples. Seguro. Troque mensagens com confiança.</h1>

          <p className={styles.description}>
            Com o Chat App, suas mensagens são rápidas, simples, gratuitas. Disponível para
            celulares em todo o mundo.
          </p>

          <div className={styles.btnContainer}>
            <Button content='login' style={styles.btnPrimary} href='/login' />
            <Button content='cadastre-se' style={styles.btnSecundary} href='/register' />
          </div>
        </div>
        <div className={styles.img}>
          <Image src='/smartphone_mockup.png' alt='app exemple' width={270} height={544} />
        </div>
      </main>
      <footer className={styles.footer}>Make with ♥️ by T4 Group</footer>
    </div>
  );
}

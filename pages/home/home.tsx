import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router';
import AuthenticationButton from 'pages/authentication/components/authenticationButton';

export default function Home({href }: any) {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MarketPlaceApp</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AuthenticationButton />
      </main>
    </div>
  )
}

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthenticationButton from "pages/authentication/components/authenticationButton";
import styles from "styles/Home.module.css";
import { Box, Image, Badge } from "@chakra-ui/react";
import { NavigationPath } from "models/enum";

export default function Home(): JSX.Element {

  return (
    <div className={styles.container}>
      <Head>
        <title>MarketPlaceApp</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AuthenticationButton />
        <Box d="flex" pt="4" alignItems="center">
          <Link href={NavigationPath.product}>
            <a>Show products</a>
          </Link>
        </Box>

        <Box d="flex" pt="4" alignItems="center">
          <Link href={NavigationPath.layout}>
            <a>Back to layout</a>
          </Link>
        </Box>
      </main>
    </div>
  );
}

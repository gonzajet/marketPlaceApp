import type { AppProps } from "next/app";
import Link from "next/link";
import { NavigationPath } from "models/enum";


function Index({ Component, pageProps }: AppProps): JSX.Element {
    return (
     <>
      <h1 className="title">
          Go to{" "}
          <Link href={NavigationPath.home}>
            <a>Home!</a>
          </Link>
        </h1>
     </>
    );
  }
  export default Index;


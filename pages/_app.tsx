import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import store from "../store";
import { Provider } from "react-redux";
import { NavigationPath } from "../models/enum";
import Home from "./home/home";
import Link from "next/link";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Link href={NavigationPath.home}>
          <Home />
        </Link>
        <Link href={{pathname: `/product/${'1234'}`}}>
          <a>Test product id</a>
        </Link>
        {/* <Component {...pageProps} /> */}
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;

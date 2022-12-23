import { ChakraProvider } from "@chakra-ui/react";

import { Top } from "../components/HomeElement/Top";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import Nav from "../components/Navbar";
import Bottom from "../components/Bottom";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login" || router.pathname === "/register"
      ? false
      : true;
  return (
    <div>
      <ChakraProvider>
        <Provider store={store}>
          {showHeader && <Nav />}

          <Component {...pageProps} />
          {showHeader && <Bottom />}
        </Provider>
      </ChakraProvider>
    </div>
  );
}

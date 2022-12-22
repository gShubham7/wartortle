import { ChakraProvider } from "@chakra-ui/react";
 
import Bottom from "../components/Bottom";
import { Top } from "../components/HomeElement/Top";
import Nav from "../components/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav/>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
        <Bottom/>
    </ChakraProvider>
 
  );
}

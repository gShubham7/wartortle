import { ChakraProvider } from "@chakra-ui/react";
 
 
import { Top } from "../components/HomeElement/Top";
 
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Nav from "../components/Navbar";
 import Bottom from "../components/Bottom"
export default function App({ Component, pageProps }) {
  return (
         <div>

      <ChakraProvider>
         <Nav/>
        <Component {...pageProps} />
 
    </ChakraProvider>
             <Bottom/>
         </div>
 
  );
}

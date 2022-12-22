import { ChakraProvider } from "@chakra-ui/react";
import Bottom from "../components/Bottom";
import { Top } from "../components/HomeElement/Top";
import Nav from "../components/Navbar";
 
 
 

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

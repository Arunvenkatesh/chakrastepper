import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import ReactDom from "react-dom"
import App from "./App"

const theme = extendTheme({
  components: {
    Steps,
  },
});


ReactDom.render(
  <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>,
    document.getElementById('root')
);
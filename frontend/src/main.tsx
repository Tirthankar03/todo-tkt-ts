import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider} from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { extendTheme } from "@chakra-ui/theme-utils";

import { Provider } from 'react-redux'; 
import { store } from './store/store.ts'; 

const styles = {
	global: (props:any) => ({
		body: {
			color: mode("gray.800", "whiteAlpha.900")(props),
			bg: mode("gray.100", "#101010")(props),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const colors = {
	gray: {
		light: "#616161",
		dark: "#1e1e1e",
	},
};

const theme = extendTheme({ config, styles, colors });




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
	<Provider store={store}>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
	</Provider>
    </ChakraProvider>
  </React.StrictMode>,
)

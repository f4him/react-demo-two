import { ColorModeScript, theme, ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher top={0}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

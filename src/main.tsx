import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App.tsx"
import "@/index.css"

// redux
import { Provider } from "react-redux"
import { store } from "@/state/store.ts"

// radix
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { Toaster } from "./components/ui/toaster"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <App />
        <Toaster />
      </Theme>
    </Provider>
  </React.StrictMode>
)

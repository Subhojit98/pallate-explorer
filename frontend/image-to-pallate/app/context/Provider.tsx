"use client"
import { Provider } from "react-redux"
import store from "@/app/store/store.js"
const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default GlobalProvider

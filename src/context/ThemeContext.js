"use client"

import { createContext, useState } from "react"

export const themeToggle = createContext()

export const ThemeContext = ({children}) => {

    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev ==="dark" ? "light" : "dark"))
    }
    return <themeToggle.Provider value={{mode, toggle}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
    </themeToggle.Provider>
}


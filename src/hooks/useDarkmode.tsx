"use client"

import { useEffect, useState } from "react"

export default function useDarkmode() {
    const [isDarkMode, setDarkMode] = useState(false)

    const setDM = (dm: boolean) => {
        setDarkMode(dm)
        const strDarkMode = JSON.stringify(dm)
        localStorage.setItem("darkMode", strDarkMode)
        if (dm) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const darkMode = localStorage.getItem("darkMode")
            if (darkMode) {
                const localDarkMode: boolean = JSON.parse(darkMode)
                setDM(localDarkMode)
            } else {
                const modeUser = window.matchMedia("(prefers-color-scheme: dark)").matches
                setDM(modeUser)
            }
        }
    }, [])

    return { isDarkMode, setDM }
}

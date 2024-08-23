"use client"
import { useState, useEffect } from "react"

export default function useScroll() {
    const [hash, setHash] = useState(window.location.hash)
    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash)
        }
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])
    return hash
}

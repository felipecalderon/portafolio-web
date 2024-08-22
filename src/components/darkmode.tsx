"use client"
import useDarkmode from "@/hooks/useDarkmode"
import { Switch } from "@nextui-org/react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { LiaCloudSolid } from "react-icons/lia"
import { RiZzzLine } from "react-icons/ri"

export default function DarkModeSwitcher() {
    const { isDarkMode, setDM } = useDarkmode()
    return (
        <Switch
            isSelected={isDarkMode}
            onValueChange={setDM}
            color='default'
            startContent={<RiZzzLine />}
            endContent={<LiaCloudSolid className='text-amber-600' />}
            thumbIcon={isDarkMode ? <FaMoon color='#075985 ' /> : <FaSun color='#d97706' />}
        />
    )
}

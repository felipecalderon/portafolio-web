"use client"

import { Select, SelectItem, SharedSelection } from "@nextui-org/react"
import { marked } from "marked"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { useEffect, useState } from "react"

type ResponseChats = Record<string, ChatCompletionMessageParam[]>
interface IpGuideRes {
    ip: string
    location: {
        city: string
        country: string
        timezone: string
        latitude: number
        longitude: number
    }
}
export default function ChatSelectIp({ options }: { options: ResponseChats }) {
    const chatsIps = Object.keys(options)
    const [selected, setSelected] = useState<string | null>(null)
    const [selectedData, setData] = useState<IpGuideRes | null>(null)

    const handleSelectChange = (keys: SharedSelection) => {
        const [selected] = Array.from(keys) as string[]
        setSelected(selected ? selected : null)
    }

    const getDataIp = async (ip: string) => {
        const res = await fetch(`https://ip.guide/${ip}`)
        if (res.ok) {
            const data: IpGuideRes = await res.json()
            setData(data)
        }
    }

    useEffect(() => {
        if (selected) getDataIp(selected)
        else setData(null)
    }, [selected])

    const findedChats = selected ? options[selected] : null
    return (
        <>
            <Select onSelectionChange={handleSelectChange}>
                {chatsIps.map((option) => {
                    const q = options[option].length
                    return <SelectItem key={option}>{`${option.toString()} (${q})`}</SelectItem>
                })}
            </Select>
            <div className='mt-3'>
                {selectedData && (
                    <p className='text-center text-xl font-bold'>
                        {selectedData.location.city} {selectedData.location.country}
                    </p>
                )}
                {findedChats &&
                    findedChats.map((chat, i) => (
                        <div
                            key={`${chat.content}${i}`}
                            className={`p-3 rounded-lg break-words ${
                                chat.role === "user"
                                    ? "bg-sky-200 dark:bg-amber-600 text-gray-800 dark:text-slate-100 text-right"
                                    : "bg-amber-100 dark:bg-sky-700 text-gray-800 dark:text-slate-100"
                            }`}
                        >
                            {chat.role === "user" ? <p className='text-xs italic'>Cliente</p> : <p className='text-xs italic'>Consultor virtual</p>}
                            {chat.content && <div dangerouslySetInnerHTML={{ __html: marked(chat.content as string) }} />}
                        </div>
                    ))}
            </div>
        </>
    )
}

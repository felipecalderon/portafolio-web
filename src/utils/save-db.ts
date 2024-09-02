import { REDISDB } from "@/contants/envs"
import Redis from "ioredis"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
const redis = new Redis(REDISDB || "")

export const saveChat = async (key: string, chats: ChatCompletionMessageParam[]) => {
    try {
        await redis.set(key, JSON.stringify(chats))
        console.log("Chats guardados exitosamente")
    } catch (error) {
        console.error("Error al guardar chats:", error)
    }
}

export const getChats = async (key: string) => {
    try {
        // await redis.
        type ResponseChats = Record<string, ChatCompletionMessageParam[]>
        const keys = await redis.keys(key)
        const chats = await redis.mget(keys)
        const parseChats: ChatCompletionMessageParam[][] = chats.map((chat) => JSON.parse(chat || ""))
        const chatsWithIp: ResponseChats = parseChats.reduce((acc, chats, i) => {
            const [_str, strIp] = keys[i].split(":")
            return {
                ...acc,
                [strIp]: chats,
            }
        }, {})
        return chatsWithIp
    } catch (error) {
        console.error("Error al recuperar chats:", error)
        return []
    }
}

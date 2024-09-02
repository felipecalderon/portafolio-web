import ChatSelectIp from "@/components/selectChatIp"
import { URL } from "@/contants/envs"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
type ResponseChats = Record<string, ChatCompletionMessageParam[]>

export default async function ClientesPage() {
    const res = await fetch(`${URL}/api/chat?key=chats:*`)
    if (res.ok) {
        const data: ResponseChats = await res.json()
        return (
            <div className='max-w-lg mx-auto min-h-screen pt-6'>
                <ChatSelectIp options={data} />
            </div>
        )
    }
}

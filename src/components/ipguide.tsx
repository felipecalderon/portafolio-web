import { headers } from "next/headers"

export default async function IPData() {
    const header = headers()
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
    console.log(header.get("x-forwarded-for"))
    if (ip.includes(":")) return null

    const res = await fetch(`https://ip.guide/${ip}`)
    const data = await res.json()
    return (
        <div>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}

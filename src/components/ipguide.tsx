import { headers } from "next/headers"
interface ResponseIP {
    ip: string
    network: {
        cidr: string
        hosts: {
            start: string
            end: string
        }
        autonomous_system: {
            asn: number
            name: string
            organization: string
            country: string
            rir: string
        }
    }
    location: {
        city: string
        country: string
        timezone: string
        latitude: number
        longitude: number
    } | null
}
export default async function IPData() {
    const header = headers()
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
    console.log(header.get("x-forwarded-for"))

    if (ip.includes(":")) return null

    const res = await fetch(`https://ip.guide/${ip}`)
    const data: ResponseIP = await res.json()

    if (data.location) {
        return (
            <div>
                <p>{data.location.city}</p>
                <p>{data.location.country}</p>
                <p>{data.location.timezone}</p>
                <p>{data.network.autonomous_system.name}</p>
            </div>
        )
    }
}

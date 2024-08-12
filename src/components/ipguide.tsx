import { headers } from "next/headers"
import Weather from "./clima"
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

interface ResponseWeather {
    coord: { lon: number; lat: number }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        sea_level: number
        grnd_level: number
    }
    visibility: number
    wind: { speed: number; deg: number; gust: number }
    clouds: { all: number }
    dt: number
    sys: { country: string; sunrise: number; sunset: number }
    timezone: number
    id: number
    name: string
    cod: number
}

export default async function IPData() {
    const header = headers()
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
    console.log(header.get("x-forwarded-for"))

    const res = await fetch(`https://ip.guide/${ip}`)
    const data: ResponseIP = await res.json()
    if (!data.location) return null

    const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${process.env.CLIMA_API}`
    )
    const weather: ResponseWeather = await resWeather.json()

    if (data.location && weather) {
        return <Weather weather={weather} />
    }
}

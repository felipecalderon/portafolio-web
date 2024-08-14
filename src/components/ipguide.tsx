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
            main: "Clouds" | "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Atmosphere" | "Clear"
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

    const res = await fetch(`https://ip.guide/${ip}`)
    const data: ResponseIP = await res.json()

    const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.location?.latitude}&lon=${data.location?.longitude}&appid=${process.env.CLIMA_API}`
    )
    const weather: ResponseWeather = await resWeather.json()

    return <Weather weather={data.location && weather ? weather : demoWeather} />
}

const demoWeather: ResponseWeather = {
    coord: {
        lon: -72.5992,
        lat: -38.7315,
    },
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
        },
    ],
    base: "stations",
    main: {
        temp: 279.58,
        feels_like: 279.58,
        temp_min: 279.58,
        temp_max: 279.58,
        pressure: 1018,
        humidity: 85,
        sea_level: 1018,
        grnd_level: 1000,
    },
    visibility: 10000,
    wind: {
        speed: 0.58,
        deg: 253,
        gust: 0.53,
    },
    clouds: {
        all: 100,
    },
    dt: 1723515853,
    sys: {
        country: "CL",
        sunrise: 1723462788,
        sunset: 1723500664,
    },
    timezone: -14400,
    id: 3870011,
    name: "Temuco",
    cod: 200,
}

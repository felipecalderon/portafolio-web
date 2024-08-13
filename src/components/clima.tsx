import { Image } from "@nextui-org/react"
type WeatherCondition = "Clouds" | "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Atmosphere" | "Clear"

interface WeatherInterface {
    coord: { lon: number; lat: number }
    weather: [
        {
            id: number
            main: WeatherCondition
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

export default function Weather({ weather }: { weather: WeatherInterface }) {
    const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0 p-4 bg-fuchsia-900 text-white rounded-b-3xl shadow-2xl'>
            <p className='text-lg font-semibold text-center md:text-left'>{weather.name}</p>
            <p className='text-lg font-semibold text-center md:text-left hidden md:block'>/</p>
            <p className='text-lg font-semibold text-center md:text-left'>{checkClima(weather.weather[0].main)}</p>
            <Image src={url} alt='Icono del clima' className='w-10 h-10' />
            <p className='text-lg font-semibold text-center md:text-left'>Temperatura: {(weather.main.temp - 273.15).toFixed(1)}°C</p>
            <p className='text-lg font-semibold text-center md:text-left'>Humedad: {weather.main.humidity}%</p>
        </div>
    )
}

const checkClima = (main: WeatherCondition): string => {
    const translations: Record<WeatherCondition, string> = {
        Clouds: "Nublado",
        Thunderstorm: "Tormenta",
        Drizzle: "Llovizna",
        Rain: "Lluvia",
        Snow: "Nieve",
        Atmosphere: "Fenómeno atmosférico",
        Clear: "Despejado",
    }

    return translations[main]
}

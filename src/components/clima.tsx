import { Image, Switch } from "@nextui-org/react"
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
        <div className='flex flex-row items-center gap-2 justify-center md:space-x-2 py-1 dark:bg-sky-900 bg-amber-500/80 z-20'>
            <p className='text-xs md:text-lg font-light text-center'>{weather.name}</p>
            <p className='text-xs md:text-lg font-thin text-center'>|</p>
            <p className='text-xs md:text-lg font-light text-center'>{checkClima(weather.weather[0].main)}</p>
            <Image src={url} alt='Icono del clima' className='w-10 h-10' />
            <p className='text-xs md:text-lg font-light text-center'>Temperatura: {(weather.main.temp - 273.15).toFixed(1)}°C</p>
            <p className='text-xs md:text-lg font-light text-center'>Humedad: {weather.main.humidity}%</p>
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

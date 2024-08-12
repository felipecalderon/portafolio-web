import { Image } from "@nextui-org/react"

interface WeatherInterface {
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

export default function Weather({ weather }: { weather: WeatherInterface }) {
    console.log(weather)
    const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    return (
        <div className='text-center'>
            <p>Ciudad: {weather.name}</p>
            <p>Temperatura actual: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Humedad: {weather.main.humidity}%</p>
            <Image src={url} />
        </div>
    )
}

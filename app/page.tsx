'use client'
import React from "react"
import CurrentWeather from "./components/CurrentWeather"
import { CurrentWeather as CurrentWeatherType } from "./models/weather"

const Home: React.FC = ()=>{
  const sampleCurrentWeather: CurrentWeatherType = {
    city: 'Delhi',
    country:'no',
    temperature: 10,
    description:'clear sky',
    icon:'01d'
  }

  return(
    <div>
      <CurrentWeather currentWeather = {sampleCurrentWeather}/>
    </div>
  )
}
export default Home 
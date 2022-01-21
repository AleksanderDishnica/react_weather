import axios from 'axios'
import React from 'react'
import {SWeather} from './components/atoms/SWeather'
import './default.css'

  // const a = axios('').then(res=>returnData(res.data.weather[0].icon)).catch(err => console.error(err))

  // function returnData(data){
  //   return data
  // }

async function makeGetRequest(city, key) {
  //api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=8ca056149efda548bbca48d125af6a3e
  //http://openweathermap.org/img/wn/10d@2x.png
  let res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=8ca056149efda548bbca48d125af6a3e');

  document.getElementsByTagName('img')[key].src = 'http://openweathermap.org/img/wn/'+res.data.weather[0].icon+'@2x.png'
  document.getElementsByClassName('city')[key].innerHTML = city
  document.getElementsByClassName('temp')[key].innerHTML = res.data.main.temp + ' °C'
}

makeGetRequest('London', 0)

const cities = [
  'Rome', 
  'Milan',
  'Barcelona', 
  'Paris', 
  'Madrid',
  'Oslo'
]

for(let i = 0; i < cities.length; i++){
  makeGetRequest(cities[i], i+1)
}

const Weather = () => {
  return(
    <div>
      <h3 className='city city_a'></h3>
      <h1 className='temp'></h1>
      <div className='img_div'>
        <img className='main_img'/>
        <div>Today</div>
      </div>
    </div>
  )
}

const App = () => {
  return(
    <div className="mainWeather">
      <Weather />
      <br />
      <hr />
      {cities.map(i => {
        return <SWeather key={i}/>
      })}
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'

const GreetingPage = () => {
  // const [location, setLocation] = useState({})
  const [weather, setWeather] = useState('')

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords }) => {
  //     setLocation(coords)
  //   })
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=886705b4c1182eb1c69f28eb8c520e20`)
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=886705b4c1182eb1c69f28eb8c520e20')
      const data = await res.json()
      setWeather(data.weather[0].description)
    }
    fetchData()
  }, [])

  return (
    <div>
      <p>{weather}</p>
    </div>
  )
}

export default GreetingPage

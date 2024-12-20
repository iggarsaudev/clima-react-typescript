import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spiner from "./components/Spinner/Spiner"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./Hooks/useWeather"

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()  

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spiner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App

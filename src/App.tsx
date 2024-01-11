import CurrentWeather from "@components/CurrentWeather";
import Forecast from "@components/Forecest";
import FetchForecast, { GetForecastProps } from "@libs/Api/GetForcast";
import FetchWeather, { GetWeatherProps } from "@libs/Api/GetWeather";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ChangeEvent,
  useState,
} from "react";

interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps> & PropsWithChildren;
const App: AppComponents = ({ children, ...resProps }) => {
  const [currentWeather, setCurrentWeather] = useState<GetWeatherProps | null>(
    null
  );
  const [forecast, setForecast] = useState<GetForecastProps | null>(null);
  const [input, setInput] = useState("");
  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handelSearch = async () => {
    const resultWeather = await FetchWeather(input);
    const resultForecast = await FetchForecast(input);
    setCurrentWeather(resultWeather);
    setForecast(resultForecast);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <input
        className="my-10 text-xl border-2"
        type="text"
        onChange={handelChangeInput}
        value={input}
        placeholder="type city"
      />
      <button onClick={handelSearch}>Search</button>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;

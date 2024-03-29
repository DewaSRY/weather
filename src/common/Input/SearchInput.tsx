import _React, {
  FC,
  HTMLAttributes,
  ChangeEvent,
  PropsWithChildren,
  useState,
} from "react";
import Button, { ButtonTypes } from "../Button";

interface SearchInputProps extends HTMLAttributes<HTMLDivElement> {
  onSearchChange: (weatherData: WeatherData) => void;
}
interface WeatherData {
  city: string;
  temperature: number;
  weatherCondition: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
}
type SearchInputComponents = FC<SearchInputProps> & PropsWithChildren;

const SearchInput: SearchInputComponents = ({
  onSearchChange,
  children,
  ...restProps
}) => {
  const [city, setCity] = useState<string>("");
  const api_key = "0b07d835b8957ada4d2a2bcb30d4d903";

  const search = async () => {
    if (city === "") {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Assuming 'main' object contains temperature information
    const weatherData: WeatherData = {
      city: data.name,
      temperature: data.main.temp,
      weatherCondition: data.weather[0].main,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
    };

    // Pass temperature to the parent component or perform other actions
    onSearchChange(weatherData);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div
      {...restProps}
      className={`${restProps.className ? restProps.className : ""}`}
    >
      {children}
      <div className="m-auto gap-0">
        <input
          className="bg-slate-300 text-slate-900 p-2"
          placeholder="City"
          value={city}
          onChange={handleInputChange}
        />
        {/* this is unnesecery code  */}
        {/* <Button
          ButtonType={ButtonTypes.FiveButton}
          type="submit"
          onClick={() => {
            search();
          }}
        >
          Search
        </Button> */}

        <Button
          ButtonType={ButtonTypes.FiveButton}
          type="submit"
          onClick={search}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;

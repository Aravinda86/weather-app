import React from "react";
import "./Form.css";

const Form = () => {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");

  const [farenhite, setFarenhite] = React.useState(0);
  const [celcius, setCelcius] = React.useState(0); //to catch the life cycle of a particular parameter

  const convertKtoF = (temperature) =>
    ((temperature - 273.15) * (9 / 5) + 32).toFixed(2);
  const convertKtoC = (temperature) => (temperature - 273.15).toFixed(2);

  // const onChange = (event) => setCity(event.target.value);
  const getWeather = () => {
    //alert(`Weather ${city}!`);

    if (city != null && city !== "") {
      const url = `http://localhost:4000/weather`;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city,
          country: country,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(
            "Success:",
            data,
            data.main.temp,
            convertKtoF(data.main.temp)
          );
          setFarenhite(convertKtoF(data.main.temp));
          setCelcius(convertKtoC(data.main.temp));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert(`City cannot be blank`);
    }
  };

  return (
    <div className="weather_container">
      <h1 className="weather_h1">Weather App</h1>
      <div className="weather_form__inputs">
        <div className="weather_form__labelInput">
          <div className="weather_form__label">
            <label htmlFor="city">City</label>
          </div>
          <div className="weather_form__input">
            <input
              id="city"
              value={city}
              type="text"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>
        {/* <button onClick={getWeather}>Get Weather!</button> */}
        <div className="weather_form__labelInput">
          <div className="weather_form__label">
            <label htmlFor="city">Country</label>
          </div>
          <div className="weather_form__input">
            <input
              id="country"
              value={country}
              type="text"
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
        </div>
      </div>
      <button onClick={getWeather}>Get Weather!</button>
      <h3>{farenhite} F</h3>
      <h3>{celcius} C</h3>
    </div>
  );
};

export default Form;

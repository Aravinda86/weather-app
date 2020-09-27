import React from "react";
import "./Form.css";

const Form = () => {
  const [value, setValue] = React.useState("");
  const [country, setCountry] = React.useState("");

  const [farenhite, setFarenhite] = React.useState(0);
  const [celcius, setCelcius] = React.useState(0);

  // const onChange = (event) => setValue(event.target.value);
  const getWeather = () => {
    alert(`Weather ${value}!`);

    if (value != null && value != "" && country != null && country != "") {
      const url = `http://localhost:4000/weather`;
      // const data = { city: value, country: "uk" };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: value, country }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(
            "Success:",
            data,
            data.main.temp,
            ((data.main.temp - 32) * (5 / 9)).toFixed(2)
          );
          setFarenhite(data.main.temp);
          setCelcius(((data.main.temp - 32) * (5 / 9)).toFixed(2));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert(`City and Country cannot be null or blank`);
    }
  };

  return (
    <div className="form">
      <label htmlFor="city">City</label>
      <input
        id="city"
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)}
      />
      {/* <button onClick={getWeather}>Get Weather!</button> */}
      <br />
      <label htmlFor="city">Country</label>
      <input
        id="country"
        value={country}
        type="text"
        onChange={(event) => setCountry(event.target.value)}
      />
      <br />
      <button onClick={getWeather}>Get Weather!</button>

      <h3>{farenhite} F</h3>
      <h3>{celcius} C</h3>
    </div>
  );
};

export default Form;

import React from "react";
import moment from "moment";
import { Paper } from "@material-ui/core";

class Weather extends React.Component {
  render() {
    return (
      <Paper className="p-3 bg-dark text-light">
        <div className="weather-display">
          {this.props.weatherData.length === 0 ? (
            <div className="text-center w-100 text-light">
              <h1>No Weather Data Displayed</h1>
              <span>Please click the "Get Data from Sensor" button to get data</span>
            </div>
          ) : (
            ""
          )}
          {this.props.weatherData
            ? this.props.weatherData.map(weather => (
                <div key={weather.id}>
                  <div className="temperature">
                    {weather.temperature} &#8451;{" "}
                    {/*&#8457; use this for fahrenheit*/}
                  </div>
                  <div className="humidity">
                    Humidity : &nbsp;
                    {weather.humidity} &#37;
                  </div>
                  <div className="dewpoint">
                    Dew Point : &nbsp;{weather.dewpoint}
                  </div>
                  <hr />
                  <div className="date-entered">
                    {moment(weather.date_entered).format("Do MMM YYYY")}
                  </div>
                </div>
              ))
            : null}
        </div>
      </Paper>
    );
  }
}
export default Weather;

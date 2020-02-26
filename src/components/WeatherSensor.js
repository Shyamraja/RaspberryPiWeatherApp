import React, { Component } from "react";

class WeatherSensor extends Component {
  constructor() {
    super();
  
    this.getWeatherData = this.getWeatherData.bind(this);

    this.state = {
      weather: [],
    };

    this.getWeatherData();
  }
  
  async getWeatherData() {
    //console.log("getWeatherData");
    //const api_call = await fetch('/http://172.20.240.117/weatherData')
    //.then((response) => console.log(response.text()));  
    // .then(resp=>console.log(resp.data));
  }

  //const data = await api_call.json();
  //console.log(data)

  render() {
    return (
      <div>
        {/* {this.state.tempr.map(weather => (<div className="col-md-4 mt-3" key={weather.weather_id}></div>))}  */}
      </div>
    );
  }
}

export default WeatherSensor;

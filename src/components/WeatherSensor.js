import React, { Component } from 'react';
import axios from 'axios';

class WeatherSensor extends Component {
  constructor() {
    super();
    //this.showTemperture = this.showTemperature.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);

    this.state = {
      weather: []
    };
  

    //this.showTemperature();
    this.getWeatherData();
  }
    //showTemperature() {
    //axios.get("http://172.20.240.117/weatherDew").then(res => {
    //const weather = res.data;
    //this.setState({ weather })
    //console.log(res.data)
  
  //});
//}
    
    
 async getWeatherData() {
   //console.log("getWeatherData");
  //const api_call = await fetch('/http://172.20.240.117/weatherData')
  //.then((response) => console.log(response.text()));
  axios.get('http://172.20.240.117/weatherData')
  .then(resp=>console.log(resp.data));
    
 }
 
  //const data = await api_call.json();
  //console.log(data)
 
 
  render() {
    return (
        <div> 
        {/* {this.state.tempr.map(weather => (<div className="col-md-4 mt-3" key={weather.weather_id}></div>))}  */}
        </div>
      
         
      
      )
    }
}
    



export default WeatherSensor;


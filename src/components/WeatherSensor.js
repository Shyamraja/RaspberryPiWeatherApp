import React, { Component } from 'react';


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
   //axios.get("http://172.20.240.117/weatherDew", {mode: 'no-cors'}).then(res => {
    //const weather = res.data;
    //this.setState({ weather })
  //});
//}
    
ss
 async getWeatherData() {
  const api_call = await fetch('/http://172.20.240.117/weatherDew')
  .then((response) => console.log(response.json()));
  
    
  
 
  //const data = await api_call.json();
  //console.log(data)
 
 }
  render() {
    return (
        <div> 
        {/* {this.state.tempr.map(weather => (<div className="col-md-4 mt-3" key={weather.weather_id}></div>))}  */}
        </div>
      
         
      
      )
    }
}
    



export default WeatherSensor;


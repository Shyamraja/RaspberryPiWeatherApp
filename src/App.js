import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherSensor from './components/WeatherSensor';

import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      tempraure: undefined,
      humidity: undefined,
      dewpoint: undefined,
      error: undefined
    }
  }
  async getWeather(e){
    e.preventDefault();
    
    const api_call = await fetch('http://172.20.240.117/weatherData');
    const data = await api_call.json();
    console.log(data);

     
      this.setState({
         tempraure:   data.tempr,
         humidity:    data.humidity,
         dewpoint:    data.dewpoint,
         error:       ""

      });
    
    
  }

render() {
  return (
    <div>
        <div className="wrapper">
        
          <div className="containers">
           <div className="row">
            
    
     
      <Form getWeather={this.getWeather}>
           </Form>   
           <Weather tempraure={this.state.tempr} 
                                humidity={this.state.humidity}
                                dewpoint={this.state.dewpoint}
                               error={this.state.error}
                               />         
           <WeatherSensor />
          <Weather />
                     
           </div>
                </div>
              </div>
            </div>   
      
    
    
  );
  }
}
export default App;

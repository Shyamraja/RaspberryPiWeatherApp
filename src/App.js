import React, { Component } from 'react';
import Form from './components/Form';

import WeatherSensor from './components/WeatherSensor';
import { Line } from 'react-chartjs-2'
import { chart } from 'highcharts';
import './App.css';

class App extends Component { 

render() {
  return (
    <div className="main">
     
      <Form getWeather={this.getWeather}>
           </Form>            
           <WeatherSensor />
          
          
        
    
    </div>
  );
}
}
export default App;

import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherSensor from './components/WeatherSensor';
import axios from 'axios';

import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      
        weatherData: [],
        temp: undefined,
        humidity: undefined,
        dewpoint: undefined,
        date_entered: undefined,
        error: undefined
    }
    
  }
     async getWeather(e){
    e.preventDefault();
   
    console.log("i am inside getWeather");
    //const api_call = await fetch('http://172.20.240.117/weatherData');
    //const data = await api_call.json();
    
     
     axios.get('https://tapiopaloniemi.fi/weather.php')
     .then(response => {
      const data = response.data;
      console.log(data);
      // console.log("DATA: ");
      // console.log(data);
      // console.log(data.length);
      // console.log("temp: ", data.temp);
      let newWeather = [];
      //for (let i = 0; i < data.length; i++) {
          // const weather = {
          //     tempr: data[0].temp,
          //     humidity: data[0].humidity,
          //     dewpoint: data[0].dewpoint,
          //     date_entered: data[0].date_entered,
          //     id: data[0].id
          // };
      //    newWeather.push(weather);
     // }

     this.setState({
      tempr: data[1].temp,
      humidity: data[1].humidity,
      dewpoint: data[1].dewpoint,
      error:  ""
 
     });
      this.setState({
          weatherData: newWeather
      });
      console.log("STATE: ");
      console.log(this.state);
  })
}

  //  var data=[{
  //    tempr:40,
  //    dewpoint:40.5,
  //    humidity:25,
  //    },
  //    {
  //    tempr:45,
  //    dewpoint:40.5,
  //    humidity:25,
  //    },
  //   ]
    //console.log(data);
   
   
    
  
    
    //axios.get('http://172.20.240.117/weatherData')
    //.then(resp=>console.log(resp.data));
    

     
    

render() {
  return (
    <div>
        <div className="wrapper">
        
          <div className="containers">
           <div className="row">
      <button onClick={this.getWeather}>GET WEATHER FROM SENSOR</button>
            {this.state.temp}
     <table>
       <tr>
         
         <th>temperature</th>
         <th>humidity</th>
         <th>dewpoint</th>
         <th>error</th>
         <th>weatherData</th>
       </tr>
          <tr> 
           <td>{this.state.tempr}</td>
           <td>{this.state.humidity}</td>
           <td>{this.state.dewpoint}</td>
           <td>{this.state.error}</td>
           <td>{this.state.weatherData}</td>
       
          </tr>
     </table>
     
      {/* <Form getWeather={this.getWeather}>
           </Form>   
           <Weather tempraure={this.state.tempr} 
                                humidity={this.state.humidity}
                                dewpoint={this.state.dewpoint}
                                error={this.state.error}
                               />         
           <WeatherSensor />
          <Weather /> */}
                     
           </div>
                </div>
              </div>
            </div>   
      
    
    
  );
  }
}

export default App;

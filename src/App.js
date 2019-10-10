import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherSensor from './components/WeatherSensor';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.state = {
            weatherData: [],
            tempraure: undefined,
            humidity: undefined,
            dewpoint: undefined,
            date_entered: undefined,
            error: undefined
        }
    }

    async getWeather(e) {
        e.preventDefault();

        // const api_call = await fetch('http://172.20.240.117/weatherData');
        // const data = await api_call.json();
        //console.log("DATA: ");
        // //console.log(data);
        //let data = null;
        //axios.get('http://172.20.240.117/weatherData')
       
        axios.get('https://tapiopaloniemi.fi/weather.php')
        .then(response => {
            const data = response.data;
            console.log(data);
            // console.log("DATA: ");
            // console.log(data);
            // console.log(data.length);
            // console.log("temp: ", data.temp);
            let newWeather = [];
            for (let i = 0; i < data.length; i++) {
                const weather = {
                    tempr: data[i].temp,
                    humidity: data[i].humidity,
                    dewpoint: data[i].dewpoint,
                    date_entered: data[i].date_entered,
                    id: data[i].id
                };
                newWeather.push(weather);
            }

            this.setState({
                weatherData: newWeather
            });
            console.log("STATE: ");
            console.log(this.state);
        })
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
                                     weatherData={this.state.weatherData}
                            />
                            <WeatherSensor/>
                            <Weather/>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default App;

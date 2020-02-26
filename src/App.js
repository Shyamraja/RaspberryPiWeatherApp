import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Chart from "./components/Chart";
import Landing from "./components/Landing";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      weatherData: [],
      filteredWeather: [],
      temperatures: [],
      humidities: [],
      dewPoints: [],
      date_enters: [],
      temperature: undefined,
      humidity: undefined,
      dewPoint: undefined,
      date_entered: undefined,
      error: undefined,
      hasData: false,
    };
  }
  async getWeather(e) {
    e.preventDefault();

    const api_call = await fetch("http://172.20.240.117/weatherData");
    const data = await api_call.json();

    let newWeather = [];
    
    for (let i = 0; i < data.length; i++) {
      const weather = {
        temperature: data[i].tempr,
        humidity: data[i].humidity,
        dewpoint: data[i].dewpoint,
        date_entered: data[i].date_entered,
        id: data[i].id,
      };
      newWeather.push(weather);    
    }
    
    this.setState({
      weatherData: newWeather,    
      hasData: true,
    });
    console.log("STATE: ", this.state);
  }

  render() {
    let chart;
    
    const wD = this.state.weatherData
      .sort(function compare(a, b) {
        var dateA = new Date(a.date_entered).getTime();
        var dateB = new Date(b.date_entered).getTime();
        if(moment(dateA).format("H") === moment(dateB).format("H")) {
          return "";
        }
        if(moment(dateA).format("H") !== moment(dateB).format("H")) {
          return dateB - dateA;
        }
      })
      .slice(0, 20);
    if (this.state.hasData) {
      chart = (
        <Chart
          temperatures={wD.map(temp => temp.temperature)}
          humidities={wD.map(humid => humid.humidity)}
          dewPoints={wD.map(dew => dew.dewpoint)}
          date_enters={wD.map(date => date.date_entered)}
        />
      );
    } else {
      chart = null;
    }
    return (
      <div className="container-fluid">
        {console.log(wD)}
        <div className="wrapper">
          <div className="containers">
            <Landing />
          </div>
          <Form getWeather={this.getWeather} />
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">{chart}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <Weather weatherData={wD} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

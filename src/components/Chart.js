import React from "react";
import { Line } from "react-chartjs-2";

export default class chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: this.props.date_enters,
        datasets: [
          {
            label: "Temperature",
            backgroundColor: "lightblue",
            data: this.props.temperatures,
          },
          {
            label: "Humidity",
            backgroundColor: "lightgreen",
            data: this.props.humidities,
          },
          {
            label: "Dew Point",
            backgroundColor: "lightyellow",
            data: this.props.dewPoints,
          },
        ],
      },
    };
    if (this.state && this.state.data && this.state.data.datasets) {
      console.log("CHART DATA: ", this.state.data);
    }
  }
  render() {
    if (this.props.data) {
      console.log("CHARTS DATA: ", this.state.data);
    }
    return (
      <div
        className="chart-div"
      >
        <Line options={{ responsive: true }} data={this.state.data} />
      </div>
    );
  }
}

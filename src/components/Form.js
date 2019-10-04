import React from "react";
class Form extends React.Component{
    render(){
        return(
            
            <form  onSubmit={this.props.getWeather}>
                  <input type="text" name="city" placeholder="city" />
                 <input type="text" name="time" placeholder="time from" />
                 <input type="text" name="time" placeholder="time to" />
                 <button>Get Data from Sensor</button>
                 
             </form>
        );
    }
}
export default Form;

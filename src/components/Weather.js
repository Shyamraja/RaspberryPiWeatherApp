import React from "react";
class Weather extends React.Component{
    
   
     render(){
       
         return(
             <div>
              
               

                {
                    this.props.tempr && <p className="weather__key">Temprature: 
                <span className="weather__value">{this.props.tempr}</span></p>
                }
                
               
               
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                 <span className="weather__value">{this.props.humidity}</span></p>
                }
                
               
                {
                    this.props. dewpoint && <p className="weather__key">Pressure:
                    <span className="weather__value">{this.props. dewpoint}</span> </p>

                }
                 
                   
                </div>
        )
    }
}
export default Weather;     
        
    
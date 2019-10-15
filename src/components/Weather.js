import React from "react";
class Weather extends React.Component{
    
   
     render(){
       
         return(

             this.props.weatherData ? this.props.weatherData.map((weather) =>
                 <div key={weather.id}>
                     <p className="weather__key">Date:
                         <span className="weather__value">{weather.date_entered} </span>
                     </p>
                     <p className="weather__key">Temperature:
                         <span className="weather__value">{weather.tempr} </span>
                     </p>
                     <p className="weather__key">Humidity:
                         <span className="weather__value">{weather.humidity} </span>
                     </p>
                     <p className="weather__key">Dew point:
                         <span className="weather__value">{weather.dewpoint} </span>
                     </p>
                 </div>
             ) : null

        )
    }
}
export default Weather;     
        
    
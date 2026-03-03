import React from 'react'


 

const Weather = ({temps}) => {
       if (temps<15) {
            return "It's Cold outside"
        }   
        else if(temps>=15 && temps<=25){
            return "its Nice Oustide "
        }
        else{
            return"its hot outside"
        }
  
}

export default Weather

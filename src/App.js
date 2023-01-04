import { Component } from 'react';
import './App.css';
import Form from './Components/form';
import Weatherdata from './Components/Weatherdata';


const key="e36ed364400282e43250b6c4c0274d44";

class App extends Component {

  state = {
    tempreature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:""  //for empty input
  }

  getWeather= async (e)=>{
    e.preventDefault()
    //get data user entered for city and country
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    //get weather from api
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`)
    const data = await api.json()
    console.log(data)

    if(city && country){
    this.setState({
      tempreature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.name.humidity,
      description:data.weather[0].description,
      error:"" 

    })
  }else{
    this.setState({
      tempreature:"",
      city:"",
      country:"",
      humidity:"",
      description:"",
      error:"You entered wrong data" 
    })
  }
  }

  render(){

  return (
    <div className="App">
        <div className='form-div w-25 m-auto mt-5 text-white'>
           <Form getWeather={this.getWeather}/>
           <Weatherdata tempreature={this.state.tempreature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error} />
        </div>
    </div>
  );
}
}

export default App;

import React,  {useState , useEffect} from "react";
import {getWeatherData} from "./data/weatherapi"



const App = () => {

    const [weatherdata , setWeatherData] = useState(null);
    const [city , setCity] = useState("Tehran");
    const [loading , setLoading] = useState(false);

    const getData = async () => {
        try{
         const data = await getWeatherData(city);
         setWeatherData(data);
         console.log(data);
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
     getData();
    } , []);

    return (
       <div className="App">
        <div className="card">
       <h2 className="title"> آب و هوا <i className="fa fa-cloud"> </i></h2>
        <div className="search-form">
       <button type="button" onClick={()=> getData()}> جستجو کن</button>
           <input type="text"
           onChange={(e)=>setCity(e.target.value)}
           placeholder="نام شهر و لاتین تایپ کن دوست من"/>
        </div>
        {weatherdata !== null ? (<div className="main-container">
            <h4> آب و هوای زنده</h4>
            <div className="weather-icon">
                <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
            </div>
            <h3> {weatherdata.weather[0].main} </h3>
            <div className="temprature">
                <h1>{parseFloat(weatherdata.main.temp -273.15).toFixed(1) }&deg;C</h1>
            </div>
            <div className="location">
                <h3> {weatherdata.name} | {weatherdata.sys.country} <i className="fa fa-street-view"></i></h3>
            </div>
            <div className="temprature-range">
               <h6> Min:{parseFloat(weatherdata.main.temp_min -273.15).toFixed(1) }&deg;C ||
                    Max :{parseFloat(weatherdata.main.temp_max -273.15).toFixed(1) }&deg;C ||
                    Humidity: {weatherdata.main.humidity}%</h6>
             </div>
        </div>   ) : null}
         
         </div>
       </div>
      

    );
}
export default App;
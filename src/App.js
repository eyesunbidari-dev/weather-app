import React from "react";


const App = () => {
    return (
       <div className="App">
        <div className="card">
       <h2 className="title"> آب و هوا <i className="fa fa-cloud"> </i></h2>
        <div className="search-form">
       <button type="button"> جستجو کن</button>
           <input type="text" placeholder="نام شهر و لاتین تایپ کن دوست من"/>
        </div>
        <div className="main-container">
            <h4> آب و هوای زنده</h4>
            <div className="weather-icon">
                <i className="fa fa-sun-o"></i>
            </div>
            <h3> sunny </h3>
            <div className="temprature">
                <h1>25&deg;C</h1>
            </div>
            <div className="location">
                <h3><i className="fa fa-street-view"></i> Tehran | Iran</h3>
            </div>
            <div className="temprature-range">
               <h6> Min:25&deg;C || 28&deg;C || Humidity: 10%</h6>
            </div>
        </div>    
         </div>
       </div>
      

    );
}
export default App;
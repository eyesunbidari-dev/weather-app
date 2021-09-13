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
        </div>
       </div>
      

    );
}
export default App;
import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "fc3badb76523deb1e6b29c268d5c3481";


export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl +`q=${cityname}&appid=${apiKey}` );
        return data;
    }catch(error){
        throw error;
    }
}
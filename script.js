const apikey = "56697e9f77d1e513be675116d77f4813"
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric &q=`



const cityname= document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidityy = document.querySelector(".humiditystatus")
const wind = document.querySelector(".windstatus")

const searchbox = document.querySelector(".search input")

const search = document.querySelector("#search-button")



async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}` )
    
    var data = await response.json();
    console.log(data)
    console.log(data.main.humidity); 
    
    humidityy.innerText = data.main.humidity
    cityname.innerText = data.name
    temp.innerText= Math.round(data.main.temp) + "  °C"
    wind.innerText = data.wind.speed +"/h"
}



// search.addEventListener( "click"  , () => {
    // checkweather(searchbox.value)
        //  
// })


search.addEventListener( "click"  , (e) => {
        
        checkweather(searchbox.value)
})

searchbox.addEventListener( "keydown" , (e) => {
       if( e.key === 'Enter'){
        checkweather(searchbox.value)
       }
})
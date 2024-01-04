const apikey= "988550392987bf50a58e30af57d8fffd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weathericon=document.querySelector(".weather-icon")
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
async function checkweather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        
        var data = await response.json();
        
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp ) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
        if(data.weather[0].main =='Clouds'){
            weathericon.scr='images/clouds.png';
            
        }
        else if(data.weather[0].main=='Clear'){
            weathericon.src='images/clear.png';
            
        }
        else if(data.weather[0].main=='Rain'){
            weathericon.src='images/rain.png';
            
        }
        else if(data.weather[0].main=='Mist'){
            weathericon.src='images/mist.png';
            
        }
        else if(data.weather[0].main=='Drizzle'){
            weathericon.scr='images/drizzle.png';
            
        }
        
        
        
        
        
        
        
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none"
    }    
    
    
}


searchbtn.addEventListener("click" , ()=>{

    checkweather(searchbox.value);

})

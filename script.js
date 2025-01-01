// let place = "Tambaram";
// let key = "c0953aee927fb9bd2d8cae1d44814a0a";
// let prom = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
// );

// console.log(prom);

// prom
//     .then((data)=>{
//         return data.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(Math.round(Number(data.main.temp) - 273));
//     })
//     .catch(()=>{
//         console.log("error")
//     });

const key ="c0953aee927fb9bd2d8cae1d44814a0a";

document.getElementById("searchBtn").addEventListener("click", ()=>{
    let place = document.getElementById("cityInput").value;

    if(place.trim() ===""){
        alert("Please enter a city name.");
        return;
    }

    let weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = "<p>Loading...</p>";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
    .then((Response)=>{
        if(!Response.ok){
            throw new Error("City not found")
        }
        return Response.json();
    })
    .then((data)=>{
        const temperature = Math.round(Number(data.main.temp) -273);
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherDisplay.innerHTML=`
            <h2>${data.name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Conditions: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
            
        `;
    })
    .catch((error)=>{
        weatherDisplay.innerHTML =`<p>Error: ${error.message}</p>`
    });
    
})
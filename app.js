fetch("https://api.weatherapi.com/v1/current.json?key=bec731a0d7e64575982123958241009&q=panadura&aqi=no")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    let locationname=document.getElementById("locationname");
    locationname.innerText =data.location.name;
    console.log(data.location.name);

    let country=document.getElementsByClassName("country");
    country.innerText =data.location.country;
    console.log(data.location.country);

    let time = document.getElementsByClassName("time");
    time.innerText=data.location.time;
    console.log(data.location.localtime);

    let temp = document.getElementsByClassName("temp");
    temp.innerText=data.current.feelslike_c;
    console.log(data.current.feelslike_c);

    let condition = document.getElementsByClassName("condition");
    condition.innerText=data.current.condition.text;
    console.log(data.current.condition.text);

    let cloud1=document.getElementsByClassName("cloud1");
    cloud1.innerText =data.current.cloud;
    console.log(data.current.cloud);
    
    let humidity1=document.getElementsByClassName("humidity1");
    humidity1.innerText =data.current.humidity;
    console.log(data.current.humidity);

    let wind1=document.getElementsByClassName("wind1");
    wind1.innerText =data.current.wind_kph;
    console.log(data.current.wind_kph);

    let dew1=document.getElementsByClassName("dew1");
    dew1.innerText =data.current.dewpoint_c;
    console.log(data.current.dewpoint_c);

    let img=document.getElementsByClassName("pic");
    img.src =data.current.condition.icon;
    console.log(data.current.condition.icon);
   
});


function serchCity(){
    let txtsearch=document.getElementById("txtsearch").value;
    
    locationname = document.getElementById("locationname");
    country = document.getElementById("country");
    time =  document.getElementById("time");
    temp = document.getElementById("temp");
    condition = document.getElementById("condition");
    cloud1 = document.getElementById("cloud1");
    humidity1 = document.getElementById("humidity1");
    wind1 = document.getElementById("wind1");
    dew1 = document.getElementById("dew1");
    img = document.getElementById("pic");

    console.log(txtsearch);
    fetch(`https://api.weatherapi.com/v1/current.json?key=bec731a0d7e64575982123958241009&q=${txtsearch}&aqi=no`)
    .then(res=>res.json())
    .then(data =>{
        console.log(data); 


        locationname.innerText = data.location.name;
        country.innerText = data.location.country;
        time.innerHTML = data.location.localtime;
        temp.innerHTML = data.current.feelslike_c;
        condition.innerHTML = data.current.condition.text;
        cloud1.innerHTML = data.current.cloud;
        humidity1.innerHTML = data.current.humidity;
        wind1.innerHTML = data.current.wind_kph;
        dew1.innerHTML = data.current.dewpoint_c;
        img.src = data.current.condition.icon;
           
    })
}

function forecast() {
    let txtsearch = document.getElementById("txtsearch").value
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=bec731a0d7e64575982123958241009&q=${txtsearch}&days=9&aqi=no`)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let fc1=document.getElementById("fc1");
            fc1.innerText =data.forecast.forecastday;
            console.log(data.forecast.forecastday);

            let fc2=document.getElementById("fc2");
            fc2.innerText =data.forecast.forecastday;
            console.log(data.forecast.forecastday);

            let fc3=document.getElementById("fc3");
            fc3.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            let fc4=document.getElementById("fc4");
            fc4.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            let fc5=document.getElementById("fc5");
            fc5.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            let fc6=document.getElementById("fc6");
            fc6.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            let fc7=document.getElementById("fc7");
            fc7.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            let fc8=document.getElementById("fc8");
            fc8.innerText =data.forecast.forecastday.date;
            console.log(data.forecast.forecastday.date);

            })
}

// function forecast() {
//     let txtsearch = document.getElementById("txtsearch").value;
//     fetch(`https://api.weatherapi.com/v1/forecast.json?key=bec731a0d7e64575982123958241009&q=${txtsearch}&days=9&aqi=no`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);

//             // Access the forecast days array
//             let forecastDays = data.forecast.forecastday;

//             // Display forecast dates
//             for (let i = 0; i < forecastDays.length; i++) {
//                 let fcElement = document.getElementById(`fc${i + 1}`);
//                 if (fcElement) {
//                     fcElement.innerText = forecastDays[i].date;
//                     console.log(forecastDays[i].date);
//                 }
//             }
//         });
// }






























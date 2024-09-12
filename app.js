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

    let img=document.getElementsByClassName("img");
    img.innerText =data.current.condition.icon;
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
           
    })
}

function forecast() {
    let txtsearch = document.getElementById("txtsearch").value
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=bec731a0d7e64575982123958241009&q=${txtsearch}&days=9&aqi=no`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("dateforecast1").innerHTML = data.forecast.forecastday[1].date
            document.getElementById("iconforecast1").innerHTML = `<img src="${data.forecast.forecastday[1].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast1").innerHTML = data.forecast.forecastday[1].day.mintemp_c + "-" + data.forecast.forecastday[1].day.maxtemp_c + "°C"

            document.getElementById("dateforecast2").innerHTML = data.forecast.forecastday[2].date
            document.getElementById("iconforecast2").innerHTML = `<img src="${data.forecast.forecastday[2].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast2").innerHTML = data.forecast.forecastday[2].day.mintemp_c + "-" + data.forecast.forecastday[2].day.maxtemp_c + "°C"

            document.getElementById("dateforecast3").innerHTML = data.forecast.forecastday[3].date
            document.getElementById("iconforecast3").innerHTML = `<img src="${data.forecast.forecastday[3].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast3").innerHTML = data.forecast.forecastday[3].day.mintemp_c + "-" + data.forecast.forecastday[3].day.maxtemp_c + "°C"

            document.getElementById("dateforecast4").innerHTML = data.forecast.forecastday[4].date
            document.getElementById("iconforecast4").innerHTML = `<img src="${data.forecast.forecastday[4].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast4").innerHTML = data.forecast.forecastday[4].day.mintemp_c + "-" + data.forecast.forecastday[4].day.maxtemp_c + "°C"

            document.getElementById("dateforecast5").innerHTML = data.forecast.forecastday[5].date
            document.getElementById("iconforecast5").innerHTML = `<img src="${data.forecast.forecastday[5].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast5").innerHTML = data.forecast.forecastday[5].day.mintemp_c + "-" + data.forecast.forecastday[5].day.maxtemp_c + "°C"

            document.getElementById("dateforecast6").innerHTML = data.forecast.forecastday[6].date
            document.getElementById("iconforecast6").innerHTML = `<img src="${data.forecast.forecastday[6].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast6").innerHTML = data.forecast.forecastday[6].day.mintemp_c + "-" + data.forecast.forecastday[6].day.maxtemp_c + "°C"

            document.getElementById("dateforecast7").innerHTML = data.forecast.forecastday[7].date
            document.getElementById("iconforecast7").innerHTML = `<img src="${data.forecast.forecastday[7].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast7").innerHTML = data.forecast.forecastday[7].day.mintemp_c + "-" + data.forecast.forecastday[7].day.maxtemp_c + "°C"

            document.getElementById("dateforecast8").innerHTML = data.forecast.forecastday[8].date
            document.getElementById("iconforecast8").innerHTML = `<img src="${data.forecast.forecastday[8].day.condition.icon}" alt="" width="70px" height="70px">`
            document.getElementById("tempforecast8").innerHTML = data.forecast.forecastday[8].day.mintemp_c + "-" + data.forecast.forecastday[8].day.maxtemp_c + "°C"
        })

}
































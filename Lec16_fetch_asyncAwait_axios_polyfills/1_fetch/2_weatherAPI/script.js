let weatherAPI=(lat,lon,key)=>{
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
}

let key='872699072507dda534f5dc045c8c97eb';

let geoCodingAPI=(key,city_name)=>{
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${key}`;
}

//Geocoding API when hit returns the latitude and longitude for the city name we provide it.
//The latitude and longitude that GeocodingAPI returns is given to weatherAPI and it returns the weather.


fetch(geoCodingAPI(key,'Delhi'))
    .then(data=>data.json())
    .then(data=>{
        fetch(weatherAPI(data[0].lat,data[0].lon,key))
            .then(data=>data.json())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })  
    })
    .catch((err)=>{
        console.log(err);
    })
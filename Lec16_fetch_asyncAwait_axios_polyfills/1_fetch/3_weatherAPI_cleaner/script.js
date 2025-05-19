let weatherAPI=(lat,lon,key)=>{
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
}

let key='872699072507dda534f5dc045c8c97eb';

let geoCodingAPI=(key,city_name)=>{
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${key}`;
}

function getWeather(data){
    return new Promise((resolve,reject)=>{
        fetch(weatherAPI(data.lat,data.lon,key))
            .then(data=>data.json())
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(err)
            })
    })
}

function getCoordinates(city,key){
    return new Promise((resolve,reject)=>{
        fetch(geoCodingAPI(key,city))
            .then(data=>data.json())
            .then(data=>{
                resolve({
                    lat:data[0].lat,
                    lon:data[0].lon
                })
            })
            .catch(err=>{
                reject(err)
            })
    })
}

getCoordinates('Delhi',key)
    .then(getWeather)
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
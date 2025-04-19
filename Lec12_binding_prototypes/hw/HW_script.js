function getWeatherData() {
    return new Promise((resolve,reject)=>{
        boolReturn=true;
        setTimeout(()=>{
            if(boolReturn){
                resolve(data = {
                    city: "Delhi",
                    temperature: 25,
                    condition: "Sunny",
                    forecast: [23, 24, 26, 25, 24],
                    aqi: 50
                })
            }
            else{
                reject("Get Weather failed.")
            }
        },2000)
    }) 
}

function storeInDB(obj) {
    // takes 2 seconds to store in db and then goes to generate report
    console.log(obj);
    return new Promise((resolve,reject)=>{
        boolReturn=true;
        setTimeout(()=>{
            if(boolReturn){
                resolve("Stored in database.")
            }
            else{
                reject("Storing in database failed.")
            }
        },2000)
    })
}

function generateReport(msg) {
    // returns const report = `Weather Report for ${data.city}:
    // Temperature: ${data.temperature}°C
    // Condition: ${data.condition}
    // 5-Day Forecast: ${data.forecast.join(', ')}°C
    // Air Quality Index: ${data.aqi}`;
    // After 2 second
    console.log(msg);
    return new Promise((resolve,reject)=>{
        boolReturn=true;
        setTimeout(()=>{
            if(boolReturn){
                resolve("=====Report=====")
            }
            else{
                reject("Report generation failed.")
            }
        },2000)
    }) 
}

getWeatherData()
    .then(storeInDB)
    .then(generateReport)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    })

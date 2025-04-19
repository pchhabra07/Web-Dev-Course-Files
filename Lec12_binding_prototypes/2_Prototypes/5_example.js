function vehicle(company,year){
    this.company=company;
    this.year=year;
    this.details=function(){
        console.log(this.company)
        console.log(this.year)
    }
}

function car(name,price,company,year){
    vehicle.call(this,company,year)
    this.price=price
    this.name=name
}


function bike(name,price,company,year){
    vehicle.call(this,company,year)
    this.name=name
    this.price=price;
}

Object.assign(bike.prototype,vehicle);

let bike1= new bike('classic',200000,'royal enfield',2008)
console.log(bike1);
bike1.details();
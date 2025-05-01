class vehicle{
    constructor(company,year){
        // console.log("Constructor of vehicle is invoked")
        this.company=company;
        this.year=year;
    }

    details(){
        console.log(`This vehicale was made in ${this.year} by ${this.company}`)
    }
}

class car extends vehicle{
    constructor(name,price,company,year){
        //First call of all constructors should be super calls to parent classes before changing anything in child class, else it gives error
        super(company,year);
        // console.log("Constructor of car is invoked")
        this.name=name;
        this.price=price;
    }

    start(){
        console.log("This car is running...");
    }

    details(){
        console.log(`This is ${this.name} car with a price of ${this.price}`);
        super.details();
    }
}

let c1=new car('Punch','8L','Tata',2016);
c1.details();
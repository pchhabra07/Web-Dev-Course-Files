
//Public
// class coffeeMaker{
//     waterAmount=0;

//     constructor(type){
//         this.type=type;
//     }
// }

// let cm = new coffeeMaker("espresso");

//Protected
// class vehicle{
//     _year=2025;

//     constructor(company){
//         this.company=company;
//     }
// }

// class car extends vehicle{
//     constructor(name,company){
//         super(company);
//         this.name=name;
//         console.log(`This car has a name ${this.name} made by ${this.company} in ${this._year}`);
//     }
// }

// let c1=new car("punch","tata");
// console.log(c1._year)

//Private
// class coffeeMaker{
//     #waterAmount=0;

//     constructor(type){
//         this.type=type;
//     }
//     get getWaterAmt(){
//         return this.#waterAmount;
//     }
// }

// let cm = new coffeeMaker("espresso");
// // console.log(cm.#waterAmount);
// console.log(cm.getWaterAmt);
function printPersonalDetails(city,country){
    console.log(this.name);
    console.log(this.age);
    console.log(this.college);
    console.log(city);
    console.log(country);
}

let p1={
    name:"pratham",
    age:19,
    college:"BVP"
}

let p2={
    name:"aryan",
    age:18,
    college:"MAIT"
}

//Context first then all the arguments
// printPersonalDetails.call(p2,"Delhi","India");

//Context first then an array of the arguments
// printPersonalDetails.apply(p2,["Delhi","India"]);

let f1=printPersonalDetails.bind(p1,"Delhi","India");
let f2=printPersonalDetails.bind(p2,"Delhi","India");

f1();
f2();
let person = {
    name:"person",
    greet:function(){
        console.log("hello");
    }
}

//Object.create takes an argument of an object which creates another object whose "__proto__" a.k.a. parent object is the given object, here "person"
let jack=Object.create(person);
let tom=Object.create(person);

console.log(jack.__proto__===person);

jack.__proto__.name='jack';
console.log(tom.name);
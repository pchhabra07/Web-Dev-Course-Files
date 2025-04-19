let personPrototype={
    city:'Delhi',
    country:'India'
}

function person(name,age){
    this.name=name
    this.age=age
}

Object.assign(person.prototype,personPrototype)


let p1=new person('john',22)

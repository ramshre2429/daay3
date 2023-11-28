compare two json

let obj1 = { name: "person 1", age: 5 }
let obj2 = { age: 5, name: "person 1" }
let ob1 = JSON.stringify(obj1)
let ob2 = JSON.stringify(obj2)
console.log(ob1, ob2)
if (ob1 === ob2) {
    console.log("true")
}
else {
    console.log("False")
}


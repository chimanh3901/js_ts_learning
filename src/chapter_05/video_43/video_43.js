console.log("Video 43");

const person = {
    name1: "Manh",
    age: 18
}

console.log("Person before:", person);

//Lấy thuộc tính bất kì từ Object
console.log("age", person.age);
console.log("Name:", person["name1"]);

//Gán thuộc tính mới cho Object
person.address = "Ha Noi";
person["language"] = "Vietnamese";
console.log("Person after", person);

//Xóa thuộc tính trong Object

delete person.name1;
console.log("After removing", person);
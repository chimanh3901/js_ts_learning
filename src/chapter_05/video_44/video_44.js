console.log("Video 44");

const sv1 = {
    name1: "Manh",
    score: 8.5
}

const sv2 = {
    name1: "Nam",
    score: 9
}

const sv3 = {
    name1: "Cuong",
    score: 7.3
}

const sinhvien = [sv1, sv2, sv3];
console.log("List SV:", sinhvien);

//Vòng lặp forEach
const nameSV = sinhvien.forEach((item, index) => {
    console.log("Index:", index, "and Name:", item.name1);
})

console.log("---")

//Vòng lặp For - In
const person = {
    name1: "Manh",
    age: 18,
    address: "Ha Noi"
}

//Lấy ra Key từ Object
for (let key in person) { //Khuyên dùng
    console.log(key, person[key]);
}

//Lấy ra Value từ Object
for (let value of Object.values(person)) {
    console.log(value);
}

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}


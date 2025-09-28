console.log("Video 39");

const fruits = ["Táo", "Ổi", "Mận", "Hồng", "Chanh"];

console.log(fruits, fruits.length);

//Vòng lặp truyền thống

for (let i = 0; i < fruits.length; i++) {
    console.log(`i = ${i} and value = ${fruits[i]}`);
}
console.log("---");

//Nếu lấy từ 1 (hoặc số nào đó khác 0)
for (let i = 1; i <= fruits.length; i++) {
    console.log(`i = ${i} and value = ${fruits[i - 1]}`);
}

console.log("---")

//Vòng lặp forEach

//Function
fruits.forEach(function(index, value) {
    console.log(`Index = ${index} and Value = ${value}`)
})

console.log("---")

//Arrow function
fruits.forEach((value, index) => {
    console.log(`Index = ${index} and Value = ${value}`);
})
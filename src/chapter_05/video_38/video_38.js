console.log("Video 38");

const fruits = ["Táo", "Ổi", "Xoài", "Dưa Hấu"];

//Index bắt đầu từ 0. Lấy phần tử = arr[index]
console.log(`Index 0 = ${fruits[0]}`);
console.log(`Index 2 = ${fruits[2]}`);

//Update phần tử trong mảng
fruits[2] = "Update Name";

console.log("Update Name", fruits);

//Thêm phần tử
//Vào đầu
fruits.unshift("Mận", 123, true);
//Vào cuối
fruits.push(null, "Push");
console.log("After adding", fruits);

//Xóa phần tử
//Ở cuối
fruits.pop();
//Ở đầu
fruits.shift();
console.log("After removing", fruits);


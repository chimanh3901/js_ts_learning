console.log("Video 20");

// Toán tử số học (Arithmetic Operators)
// Giải thích: Các phép toán số học trong JavaScript bao gồm cộng (+), trừ (-), nhân (*), chia (/), chia lấy phần dư (%), và lũy thừa (**). Các phép toán này được sử dụng để thực hiện các tính toán số học cơ bản.
let a = 5;
const b = 10, c = 15;

console.log(a + b); // Cộng
console.log(b - a); // Trừ
console.log(a * c); // Nhân
console.log(b / a); // Chia
console.log(b % a); // Chia lấy phần dư

console.log(a * b + c); // Kết hợp các phép toán

let num = 5;

const d = num++; // Tăng sau
console.log(d);
const e = ++num; // Tăng trước
console.log(e);

// Toán tử so sánh (Comparison Operators)
// Giải thích: Các phép toán so sánh trong JavaScript bao gồm bằng (==), không bằng (!=), bằng nghiêm ngặt (===), không bằng nghiêm ngặt (!==), lớn hơn (>), nhỏ hơn (<), lớn hơn hoặc bằng (>=), và nhỏ hơn hoặc bằng (<=). Các phép toán này được sử dụng để so sánh hai giá trị và trả về kết quả là true hoặc false.
const x = 5;
const y = "5"; // Chuỗi
console.log(x == y); // Bằng (true) - so sánh giá trị
console.log(x === y); // Bằng nghiêm ngặt (false) - so sánh cả giá trị và kiểu dữ liệu
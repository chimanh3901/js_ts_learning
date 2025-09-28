console.log("Video 18");


// Kiểu dữ liệu Number
// Giải thích: Kiểu dữ liệu Number trong JavaScript bao gồm cả số nguyên và số thực (số thập phân).
const myAge = 25;
const myScore = 9.5;

console.log(myAge);
console.log(myScore);

// Kiểu dữ liệu String
//Giải thích: Kiểu dữ liệu String trong JavaScript được sử dụng để biểu diễn chuỗi ký tự. Chuỗi có thể được định nghĩa bằng dấu nháy đơn (' '), dấu nháy kép (" "), hoặc dấu ngoặc ngược (``) cho template literals.
const firstName = "Manh";
const lastName = 'Vu';
const fullName = `Manh Vu`;

console.log(firstName + " " + lastName);
console.log("Full name: " + fullName);

// Kiểu dữ liệu Boolean
// Giải thích: Kiểu dữ liệu Boolean trong JavaScript chỉ có hai giá trị: true (đúng) và false (sai). Kiểu dữ liệu này thường được sử dụng trong các biểu thức điều kiện và vòng lặp để kiểm tra tính đúng sai của một điều kiện nào đó.
const isSuccess = true;
console.log(isSuccess);

// Kiểu dữ liệu Undefined
// Giải thích: Kiểu dữ liệu Undefined trong JavaScript biểu thị một biến đã được khai báo nhưng chưa được gán giá trị. Khi bạn khai báo một biến mà không gán giá trị cho nó, biến đó sẽ có giá trị là undefined.
let bla;
console.log(bla);

// Kiểu dữ liệu Null
// Giải thích: Kiểu dữ liệu Null trong JavaScript biểu thị sự vắng mặt của một giá trị. Khi một biến được gán giá trị null, điều đó có nghĩa là biến đó không có giá trị nào cả.
const empty = null;
console.log(empty);
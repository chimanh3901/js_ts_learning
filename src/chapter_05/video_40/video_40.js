console.log("Video 40");

const scores = [10, 9, 8, 7, 6, 5];

//Read Data
scores.forEach((value, index) => {
    console.log(`STT: ${index} - Điểm: ${value}`);
})

//Modify Data
//Sau khi chỉnh sửa Array thông qua Map cần tạo biến để hứng lại Array mới
const scorex2 = scores.map((value, index) => { 
    return value * 2;
})

console.log(`Score Map x2: ${scorex2}`);

console.log("---");

//Cú pháp ngắn hơn (không khuyến khích)
const scorex3 = scores.map((value, index) => value * 3);

console.log("Score Map x3:", scorex3);




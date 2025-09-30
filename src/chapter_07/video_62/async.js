
console.log("1. Bắt đầu quá trình");

//Tạo một Promise để giả lập một tác vụ mất thời gian (VD: tải dữ liệu từ Server)
const myPromise = new Promise((resolve, reject) => {
    console.log("2. Thực hiện quá trình")
    setTimeout(() => {
        resolve("4. Tác vụ hoàn thành");
    }, 2000);
});

//.then() để đăng ký một hành động sẽ làm KHI Promise hoàn thành
myPromise.then((message) => {
    console.log(message);
});

console.log("3. Kết thúc quá trình");

/*
1. Bắt đầu
2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)
3. Kết thúc kịch bản chính
...Chờ 2 giây...
4. Tác vụ hoàn thành!

*/
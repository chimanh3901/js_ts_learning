console.log("Video 63");

const respone = fetch("http://localhost:8000/users");


//Hàm fetch lấy ra Raw Data => Sau đó dùng .json() để chuyển Raw Data sang Object

//Cách viết return
// respone.then((data) => {
//     return data.json();
// }).then(d => {
//     console.log(d);
// });

//Cách viết ngắn
respone
.then((data) => data.json())
.then(d => console.log(d));
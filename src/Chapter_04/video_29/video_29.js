console.log("Video 29");

// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     if (i === 5) { //5 vs "5" - number vs string
//         break;
//     }
// }

for (let i = 1; i < 10; i++) {

    //Nếu i = 5 thì điều kiện này đúng, thoát ra lần lặp hiện tại để thực thi lần lặp tiếp theo
    if (i === 5) { //5 vs "5" - number vs string
        continue;
    }

    //Nếu i = các số khác 5 thì sẽ in ra dòng này
    console.log(i);
}
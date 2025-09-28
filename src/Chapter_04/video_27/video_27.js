console.log("Video 27");

//Score: Giỏi, Khá, Trung Bình, Yếu
//Gán trực tiếp giá trị
const score = 1;
switch (score) {
    case 8:
        console.log("Giỏi");
        break;
    case 6:
        console.log("Khá");
        break;
    case 4:
        console.log("Trung Bình");
        break;
    default:
        console.log("Yếu");
        break;
}

//Gán biểu thức điều kiện
switch (true) {
    case (score >= 8 && score <= 10): //Trả về giá trị True/False
        console.log("Giỏi");
        break;
    case (score >= 6 && score < 8):
        console.log("Khá");
        break;
    case (score >= 4 && score < 6):
        console.log("Trung Bình");
    default:
        console.log("Yếu");
        break;
}


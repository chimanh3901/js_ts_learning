console.log("Lab 02");



//Phần bài làm
function diemTBFunction(diemToan, diemVan, diemAnh) {
    return (diemToan + diemVan + diemAnh)/3;
}

function xepLoai(myDiemTB) {
    if (myDiemTB >= 9 && myDiemTB <= 10) {
        return "Xuất Sắc";
    } else if (myDiemTB >= 8 && myDiemTB < 9) {
        return "Giỏi";
    } else if (myDiemTB >= 6.5 && myDiemTB < 8) {
        return "Khá";
    } else {
        return "Trung Bình";
    }
}

const myDiemTB = diemTBFunction(9, 8, 7);

console.log(`
Điểm trung bình: ${myDiemTB}
Xếp loại: ${xepLoai(myDiemTB)}
    `)


// Phần chữa bài
console.log("Phần chữa bài");
const tinhDiemTrungBinh = (Toan, Van, Anh) => {
    return (Toan + Van + Anh) / 3;
}

const xepLoai2 = (diemXepLoai) => {
    if (diemXepLoai >= 9 && diemXepLoai <= 10) {
        return "Xuất Sắc";
    } else if (diemXepLoai >=8 && diemXepLoai < 9) {
        return "Giỏi";
    } else if (diemXepLoai >= 6.5 && diemXepLoai < 8) {
        return "Khá";
    } else {
        return "Trung Bình";
    }
}

const diemToan1 = 4;
const diemVan1 = 3;
const diemAnh1 = 2;

const diemXepLoaiTB = tinhDiemTrungBinh(diemToan1, diemVan1, diemAnh1);

console.log(`
Điểm trung bình: ${diemXepLoaiTB}
Xếp loại: ${xepLoai2(diemXepLoaiTB)}
    `);




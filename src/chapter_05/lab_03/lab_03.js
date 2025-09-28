console.log("Lab 03");

const product1 = {
    productName: "Táo",
    price: 10,
    inStock: true    
}

const product2 = {
    productName: "Nho",
    price: 8,
    inStock: false
}

const product3 = {
    productName: "Mận",
    price: 7,
    inStock: true
}
const product4 = {
    productName: "Hồng",
    price: 8,
    inStock: true
}

const product5 = {
    productName: "Dưa Hấu",
    price: 4,
    inStock: false
}

const products = [product1, product2, product3, product4, product5];

//In ra tên của sản phẩm đầu tiên
console.log("Tên sản phẩm đầu tiên:", product1.productName);

//Thay đổi giá sản phẩm thử hai thành 150
product2.price = 150; //Nếu thay đổi Price ở đây thì Price ở mảng gốc cũng bị thay đổi theo
console.log("Danh sách sản phẩm:", products);

//Thêm một sản phẩm vào cuối mảng
const pushProduct = {
    productName: "Push Product",
    price: 100,
    inStock: true
}

products.push(pushProduct);
console.log("Danh sách sản phẩm sau khi thêm:", products);

//Xóa sản phẩm cuối cùng ra khỏi danh sách
products.pop();

console.log("Danh sách sản phẩm sau khi xóa:", products);

//Dùng forEach để in ra tất cả tên sản phẩm
products.forEach((item, value) => {
    console.log("Tên sản phẩm:", item.productName);
})

//Dùng map để tạo mảng mới chỉ chứa giá sản phẩm
const getPrice = products.map((item, value) => {
    return item.price;
})

console.log("Giá sản phẩm", getPrice);

//Dùng filter để lấy các sản phẩm còn hàng (inStock = true)
const getStock = products.filter((item, value) => {
    return item.inStock === true;
})

console.log("Sản phẩn còn hàng:", getStock);

//Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên
for (let key in product1) {
    console.log(key, product1[key]);
}


//Bài chữa
console.log("Bài chữa");

const pr1 = {
    name1: "Áo thun",
    price: 500,
    inStock: true
}
const pr2 = {
    name1: "Áo sơ mi",
    price: 600,
    inStock: true
}
const pr3 = {
    name1: "Áo chống nắng",
    price: 900,
    inStock: false
}
const pr4 = {
    name1: "Quần Kaki",
    price: 1000,
    inStock: true
}
const pr5 = {
    name1: "Áo khoác",
    price: 600,
    inStock: false
}

const productList = [pr1, pr2, pr3, pr4, pr5];
console.log("original:", productList);

//In ra tên sản phẩm đầu tiên
const firstProduct = productList[0];
console.log("Sản phẩm đầu tiên có tên là:", firstProduct.name1);

//Thay đổi giá của sản phẩm thứ hai thành 150
//Cách sửa để không thay đổi giá trị của thuộc tính lúc đầu
const productListUpdate = [pr1, {
    name1: pr2.name1,
    price: 150,
    inStock: pr2.inStock
}, pr3, pr4, pr5];
console.log("Thay đổi giá sản phẩm 2: ", productListUpdate);

//Thêm một sản phẩm mới vào cuối mảng
productList.push({
    name1: "Last Product",
    price: 300,
    inStock: false
});
console.log("Danh sách sản phẩm sau khi thêm:", productList);

//Xóa sản phẩm cuối cùng của mảng
productList.pop();
console.log("Danh sách sản phẩm sau khi xóa:", productList);

//Dùng forEach để in ra tên tất cả sản phẩm
productList.forEach((item, index) => {
    console.log("Tên các sản phẩm:", item.name1);
})

//Dùng map tạo ra một mảng mới chỉ chứa giá của sản phẩm
const priceList = productList.map((item, index) => { 
    return item.price;
})
console.log("Giá của sản phẩm:", priceList);

//Dùng filter để lấy ra các sản phẩm còn hàng
const inStockCheck = productList.filter((item, index) => {
    return item.inStock === true;
})
console.log("Sản phẩm còn hàng", inStockCheck);

//Dùng for...in để duyệt thuộc tính của sản phẩm đầu tiên
for (let key in pr1) {
    console.log(key, pr1[key]);
}
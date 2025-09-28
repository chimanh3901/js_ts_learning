console.log("Video 32");

//Arrow function

const sum = (a, b, c) => {
    console.log("Before running");
    if (typeof a !== "number") {
        console.log("Return Empty");
        return; //Kiểm tra điều kiện và kết thúc function
    }
    console.log("After running");
    return a + b + c;
}

console.log(sum("ABCD", 2, 3));
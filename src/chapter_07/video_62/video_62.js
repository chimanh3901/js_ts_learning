console.log("Video 62");

console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 2000);

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            //return
            resolve("Resolve");
        }, 2000);
    })
}

const test = myPromise();
console.log("test", test);

console.log("3");

console.log("----- with promise blow:")
console.log("1");
myPromise().then(data => {
    console.log("data", data);
    console.log("3");
})
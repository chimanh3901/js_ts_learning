console.log("Video 41");

const age = [20, 18, 14, 16, 19, 12];

const agex2 = age.map((item, index) => {
    return item * 2;
});

console.log("Age original:", age);
console.log("Age x2:", agex2);

console.log("---");

const adultAge = age.filter((item, index) => {
    return item > 18;
})

console.log("Age > 18", adultAge);
console.log("Video 52");


const myBtnElm = document.getElementById("myBtn");
const backBtnElm = document.getElementById("backBtn");

const myTextElm = document.getElementById("myText");

console.log(myBtnElm, myTextElm);

myBtnElm.addEventListener("click", () => {
    console.log("Button clicked!");
    // myTextElm.innerText = "Change Text!";
    myTextElm.innerHTML = "<strong>Xin chào!</strong>, <em>Xin chào!</em>"
});

backBtnElm.addEventListener("click", () => {
    myTextElm.innerText = "Video 52";
})
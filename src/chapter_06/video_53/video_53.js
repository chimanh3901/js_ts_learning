console.log("Video 53");

const myBtnElm = document.getElementById("myBtn");

const backBtnElm = document.getElementById("backBtn");

const myTextElm = document.getElementById("myText")

myBtnElm.addEventListener("click", () => {
    console.log("Click button!");
    myTextElm.style.color = "red";
    myTextElm.style.backgroundColor = "green";
    myTextElm.classList.add("newClass");
});
backBtnElm.addEventListener("click", () => {
    console.log("Click button!");
    myTextElm.style.color = "black";
    myTextElm.style.backgroundColor = "unset";
    myTextElm.classList.remove("newClass");
});
console.log("Video 51");

const elm = document.getElementById("myBtn");

const handleClickButton = () => {
    console.log("Button Clicked");
}

elm.addEventListener("click", handleClickButton); //Truyền tham chiếu

// elm.addEventListener("click", function() {
//     console.log("Button clicked");
// });

console.log(elm);
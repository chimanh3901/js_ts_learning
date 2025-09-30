console.log("Video 55");

const btn = document.getElementById("submit");

const input = document.getElementById("name");

const prev = document.getElementById("prev");

const prevName = localStorage.getItem("name");

if (prevName) {
    prev.innerHTML = `<b>${prevName}</b>`;
}


btn.addEventListener("click", () => {
    console.log(input.value);
    localStorage.setItem("name", input.value);
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`;

});
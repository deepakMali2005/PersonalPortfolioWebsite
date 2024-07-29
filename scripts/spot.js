let spot = document.querySelector(".spot");

let main = document.querySelector(".main");

window.addEventListener("mousemove", (details) => {
    let valX = details.pageX;
    let valY = details.pageY;

    setTimeout(() => {
        spot.style.left = valX + "px";
        spot.style.top = valY + "px";
    }, 100)
})
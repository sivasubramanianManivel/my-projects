// const imageContainerEl = document.querySelector(".image-container");

// const prevEl = document.getElementById("prev");
// const nextEl = document.getElementById("next");
// let x = 0;
// let timer;
// prevEl.addEventListener("click", () => {
//   x = x + 45;
//   clearTimeout(timer);
//   updateGallery();
// });
// nextEl.addEventListener("click", () => {
//   x = x - 45;
//   clearTimeout(timer);
//   updateGallery();
// });

// function updateGallery() {
//   imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//   timer = setTimeout(() => {
//     x = x - 45;
//     updateGallery();
//   }, 3000);
// }

// updateGallery();


// jquery codes
const $imageContainerEl = $(".image-container");

const $prevEl = $("#prev");
const $nextEl = $("#next");
let x = 0;
let timer;

$prevEl.on("click", function() {
    x += 45;
    clearTimeout(timer);
    updateGallery();
});

$nextEl.on("click", function() {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    $imageContainerEl.css("transform", `perspective(1000px) rotateY(${x}deg)`);
    timer = setTimeout(function() {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();


// const searchBarContainerEl = document.querySelector(".search-bar-container");

// const magnifierEl = document.querySelector(".magnifier");

// magnifierEl.addEventListener("click", () => {
//   searchBarContainerEl.classList.toggle("active");
// });

// jquery codes
const $searchBarContainerEl = $(".search-bar-container");
const $magnifierEl = $(".magnifier");

$magnifierEl.on("click", function() {
    $searchBarContainerEl.toggleClass("active");
});

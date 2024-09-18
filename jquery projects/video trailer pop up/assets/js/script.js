
// const btnEl = document.querySelector(".btn");
// const closeIconEl = document.querySelector(".close-icon");
// const trailerContainerEl = document.querySelector(".trailer-container");
// const videoEl = document.querySelector("video");

// btnEl.addEventListener("click", () => {
//   trailerContainerEl.classList.remove("active");
// });

// closeIconEl.addEventListener("click", () => {
//   trailerContainerEl.classList.add("active");
//   videoEl.pause();
//   videoEl.currentTime = 0;
// });

// jquery codes
$(document).ready(function() {
  $('.btn').click(function() {
    $('.trailer-container').removeClass('active');
  });

  $('.close-icon').click(function() {
    $('.trailer-container').addClass('active');
    const $video = $('video');
    $video.get(0).pause();
    $video.get(0).currentTime = 0;
  });
});

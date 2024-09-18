// const bgImageEl = document.getElementById("bg-image");

// window.addEventListener("scroll", () => {
//   updateImage();
// });

// function updateImage() {
//   bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
//   bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
// }

// jquery codes
$(document).ready(function() {
  var $bgImageEl = $("#bg-image");
  
  $(window).on("scroll", function() {
      updateImage();
  });
  
  function updateImage() {
      var opacity = 1 - $(window).scrollTop() / 900;
      var backgroundSize = 160 - $(window).scrollTop() / 12 + "%";
      
      $bgImageEl.css({
          "opacity": opacity,
          "background-size": backgroundSize
      });
  }
});

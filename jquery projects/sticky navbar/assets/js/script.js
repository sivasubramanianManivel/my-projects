// const navbarEl = document.querySelector(".navbar");

// const bottomContainerEl = document.querySelector(".bottom-container");

// console.log(navbarEl.offsetHeight);

// console.log(bottomContainerEl.offsetTop);

// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY >
//     bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
//   ) {
//     navbarEl.classList.add("active");
//   } else {
//     navbarEl.classList.remove("active");
//   }
// });

// jquery codes
$(document).ready(function() {
  const $navbarEl = $('.navbar');
  const $bottomContainerEl = $('.bottom-container');

  console.log($navbarEl.outerHeight());
  console.log($bottomContainerEl.offset().top);

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > $bottomContainerEl.offset().top - $navbarEl.outerHeight() - 50) {
      $navbarEl.addClass('active');
    } else {
      $navbarEl.removeClass('active');
    }
  });
});


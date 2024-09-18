// const containerEl = document.querySelector(".container");

// window.addEventListener("mousemove", (event) => {
//   containerEl.innerHTML = `
//         <div class="mouse-event">
//         ${event.clientX}
//         <h4>Mouse X Prosition(px)</h4>
//       </div>
//       <div class="mouse-event">
//         ${event.clientY}
//         <h4>Mouse Y Prosition(px)</h4>
//       </div>
//   `;
// });

// jquery codes
$(document).ready(function() {
  var $containerEl = $(".container");

  $(window).on("mousemove", function(event) {
      $containerEl.html(`
          <div class="mouse-event">
              ${event.clientX}
              <h4>Mouse X Position (px)</h4>
          </div>
          <div class="mouse-event">
              ${event.clientY}
              <h4>Mouse Y Position (px)</h4>
          </div>
      `);
  });
});

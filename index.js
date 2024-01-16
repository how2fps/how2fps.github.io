document.addEventListener("DOMContentLoaded", function () {
       console.log("hi");
       var fixedBox = document.querySelector(".moving-rectangle");

       window.addEventListener("scroll", function () {
              // Get the scroll position
              var scrollPosition = window.scrollY || document.documentElement.scrollTop;

              // Show/hide the fixed box based on the scroll position
              // Move the fixed box horizontally based on the scroll position
              fixedBox.style.right = 435 - scrollPosition / 8 + "px";
       });
});

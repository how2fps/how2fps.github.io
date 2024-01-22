document.addEventListener("DOMContentLoaded", function () {
       const logoText = document.querySelector(".logo-text");
       logoText.innerHTML = logoText.innerText
              .split("")
              .map((char, i) => `<span style="transform:rotate(${i * 16}deg)">${char}</span>`)
              .join("");

       const scrollbar = document.querySelector(".scrollbar");

       window.addEventListener("scroll", function () {
              // Calculate the percentage scrolled
              const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
              // Update the scroll-section's position
              scrollbar.style.transform = "translateY(" + scrollPercentage + "%)";
       });

       const mainContainer = document.querySelector(".main");
       const scrollText = document.querySelector(".scroll-text");
       let isScrolling = false;
       // Listen for the mouse wheel event
       mainContainer.addEventListener(
              "wheel",
              function (event) {
                     event.preventDefault();
                     // Check if scrolling is not already in progress
                     if (!isScrolling) {
                            isScrolling = true;

                            // Calculate the distance to scroll instantly (set to 100vh)
                            const scrollAmount = window.innerHeight;

                            // Determine the direction of the scroll
                            const delta = Math.sign(event.deltaY);

                            if (delta === 1) {
                                   scrollText.style.opacity = "0";
                                   scrollText.style.animation = "slideToRight 0.8s";
                            }

                            // Scroll instantly
                            window.scrollBy(0, delta * scrollAmount);

                            // Set a timeout to reset the scrolling flag after a short delay
                            setTimeout(function () {
                                   isScrolling = false;
                            }, 100);
                     }
              },
              { passive: false }
       );
});

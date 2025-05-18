document.addEventListener("DOMContentLoaded", function () {
       const logoText = document.querySelector(".logo-text");
       logoText.innerHTML = logoText.innerText
              .split("")
              .map((char, i) => `<span style="transform:rotate(${i * 16}deg)">${char}</span>`)
              .join("");

       const scrollbar = document.querySelector(".scrollbar");

       window.addEventListener("scroll", function () {
              const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
              scrollbar.style.transform = "translateY(" + scrollPercentage + "%)";
       });

       const mainContainer = document.querySelector(".main");
       const scrollText = document.querySelector(".scroll-text");
       let isScrolling = false;
       mainContainer.addEventListener(
              "wheel",
              function (event) {
                     event.preventDefault();
                     if (!isScrolling) {
                            isScrolling = true;
                            const scrollAmount = window.innerHeight;
                            const delta = Math.sign(event.deltaY);
                            if (delta === 1) {
                                   scrollText.style.opacity = "0";
                                   scrollText.style.animation = "slideToRight 0.8s";
                            }
                            window.scrollBy(0, delta * scrollAmount);
                            setTimeout(function () {
                                   isScrolling = false;
                            }, 100);
                     }
              },
              { passive: false }
       );
});

const burger     = document.querySelector(".burger");
const navLinks   = document.querySelector(".nav-links");
const burgerDiv1 = document.querySelector(".burger div:nth-of-type(1)");
const burgerDiv2 = document.querySelector(".burger div:nth-of-type(2)");
const burgerDiv3 = document.querySelector(".burger div:nth-of-type(3)");
const burgerDiv4 = document.querySelector(".burger div:nth-of-type(4)");
let show         = false;

function showMenu() {
    if (!show) {
        show = true;
        navLinks.style.transform = 'translateX(0%)';
        navLinks.style.transition = 'transform 0.2s ease-out';

        let linkDelay = 0;
        for (const navLinkChild of Array.from(navLinks.children)) {
            navLinkChild.style.opacity = '1';
            navLinkChild.style.transition = `opacity 0.2s ease-out ${linkDelay + 0.2}s`;
            linkDelay += 0.2;

            navLinkChild.addEventListener("mouseover", function() {
                this.style.transform = "scale(1.2)";
                this.style.transition = "transform 0.5s ease-out";
            });

            navLinkChild.addEventListener("mouseout", function() {
                this.style.transform = "scale(1)";
                this.style.transition = "transform 0.5s ease-out";
            });
        }

        burgerDiv1.style.opacity = "0";
        burgerDiv2.style.transform = "rotateZ(45deg)";
        burgerDiv3.style.opacity = "0";
        burgerDiv4.style.transform = "rotateZ(-45deg)";

        burgerDiv1.style.transition = "opacity 0.2s ease-out";
        burgerDiv2.style.transition = "transform 0.2s ease-out";
        burgerDiv3.style.transition = "opacity 0.2s ease-out";
        burgerDiv4.style.transition = "transform 0.2s ease-out";

    } else {
        show = false;

        let linkDelay = 0;
        for (const navLinkChild of Array.from(navLinks.children)) {
            navLinkChild.style.opacity = '0';
            navLinkChild.style.transition = `opacity 0.2s ease-out ${linkDelay}s`;
            linkDelay += 0.2;
        }

        navLinks.style.transform = 'translateX(200%)';
        navLinks.style.transition = `transform 0.2s ease-out ${linkDelay}s`;

        burgerDiv1.style.opacity = "1";
        burgerDiv2.style.transform = "rotateZ(0deg)";
        burgerDiv3.style.opacity = "1";
        burgerDiv4.style.transform = "rotateZ(0deg)";

        burgerDiv1.style.transition = "opacity 0.2s ease-out";
        burgerDiv2.style.transition = "transform 0.2s ease-out";
        burgerDiv3.style.transition = "opacity 0.2s ease-out";
        burgerDiv4.style.transition = "transform 0.2s ease-out";
    }
}

burger.addEventListener("click", showMenu);

function scroll() {
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".group-list");

        function activateNav() {
            let scrollPosition = window.scrollY;
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop - 120 && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    navLinks[index].classList.add("active");

                    document.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
                    navLinks[index].parentElement.classList.add("active");
                }
            });
        }

        activateNav();

        navLinks.forEach((link, index) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetSection = sections[index];
                const offset = 100;
                
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            });
        });

        window.addEventListener("scroll", activateNav);
    });

    let isScrolling = false;
    document.addEventListener(
        "wheel",
        function (event) {
            if (isScrolling) return;
            isScrolling = true;

            let sections = document.querySelectorAll("section");
            let currentIndex = 0;

            sections.forEach((section, index) => {
                let rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentIndex = index;
                }
            });

            let targetSection = null;
            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                targetSection = sections[currentIndex + 1];
            } else if (event.deltaY < 0 && currentIndex > 0) {
                targetSection = sections[currentIndex - 1];
            }

            if (targetSection) {
                let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 100;

                requestAnimationFrame(() => {
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                });

                setTimeout(() => {
                    isScrolling = false;
                }, 600);
            } else {
                isScrolling = false;
            }

            event.preventDefault();
        },
        { passive: false }
    );
}

export default scroll;
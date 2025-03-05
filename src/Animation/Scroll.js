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
                scrollToSection(index);
            });
        });

        sections.forEach((section, index) => {
            section.addEventListener("click", function () {
                let nextIndex = index + 1;
                if (nextIndex < sections.length) {
                    scrollToSection(nextIndex);
                }
            });
        });

        window.addEventListener("scroll", activateNav);

        let isScrolling = false;
        document.addEventListener("wheel", function (event) {
            if (isScrolling) return;
            isScrolling = true;

            let currentIndex = getCurrentSectionIndex();

            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                scrollToSection(currentIndex + 1);
            } else if (event.deltaY < 0 && currentIndex > 0) {
                scrollToSection(currentIndex - 1);
            }

            setTimeout(() => {
                isScrolling = false;
            }, 300);
        }, { passive: false });

        function scrollToSection(index) {
            const targetSection = sections[index];
            const offset = 100;
            window.scrollTo({
                top: targetSection.getBoundingClientRect().top + window.scrollY - offset,
                behavior: "smooth"
            });
        }

        function getCurrentSectionIndex() {
            let currentIndex = 0;
            sections.forEach((section, index) => {
                let rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentIndex = index;
                }
            });
            return currentIndex;
        }
    });
}

export default scroll;

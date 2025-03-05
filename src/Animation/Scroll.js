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

                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: "smooth",
                });
            });
        });

        window.addEventListener("scroll", activateNav);
    });

    function handleScroll(event) {
        event.preventDefault();

        let sections = document.querySelectorAll(".section-List section");
        let currentIndex = 0;

        sections.forEach((section, index) => {
            let rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentIndex = index;
            }
        });

        if (event.deltaY > 0 && currentIndex < sections.length - 1) {
            let nextSection = sections[currentIndex + 1];
            let offsetTop = nextSection.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });

        } else if (event.deltaY < 0 && currentIndex > 0) {
            let prevSection = sections[currentIndex - 1];
            let offsetTop = prevSection.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    }

    let passiveSupported = false;
    try {
        let options = {
            get passive() {
                passiveSupported = true;
                return false;
            },
        };
        window.addEventListener("test", null, options);
    } catch (err) {
        passiveSupported = false;
    }

    document.addEventListener("wheel", handleScroll, passiveSupported ? { passive: false } : false);
}

export default scroll;
import { useEffect, useRef } from "react";

function entry(className = "show", threshold = 0.1) {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    } else {
                        entry.target.classList.remove(className);
                    }
                });
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [className, threshold]);

    return elementRef;
}

export default entry;
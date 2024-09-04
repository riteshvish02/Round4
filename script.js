function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco()
// Load images and fonts
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize Locomotive Scroll only if the page is served over HTTP/HTTPS
    if (window.location.protocol === "file:") {
        // Simple fallback for smooth scroll
        const scroll = {
            scrollTo: (el) => {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };
    } else {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
    }
});



// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page4",
//         start: "top top",
//         pin: true,
//         scroller: "#main",
//         scrub: 2,
//         onEnter: () => {
//             if (!isMouseEnterActive) {
//                 gsap.to("#page4left", {
//                     clipPath: `polygon(0 0, 10% 0, 10% 100%, 0 100%)`,
//                     duration: 1,
//                     ease: "expo.out",
//                 });
//                 gsap.to("#page4right", {
//                     clipPath: `polygon(90% 0, 100% 0, 100% 100%, 90% 100%)`,
//                     duration: 1,
//                     ease: "expo.out",
//                 });
//             }
//         }
//     }
// });

// tl.to("#page4left", {
//     clipPath: `polygon(0 0, 0% 0, 0% 100%, 0 100%)`,
//     duration: 1,
//     ease: "expo.out",
//     overwrite: true,
// }, "a")

gsap.to("#page1",{
    backgroundColor:"green",
    delay:3,
})
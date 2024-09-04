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
function preloadImages(selector) {
    return new Promise((resolve) => {
        const images = document.querySelectorAll(selector);
        let loaded = 0;
        const totalImages = images.length;

        images.forEach((img) => {
            const image = new Image();
            image.src = img.style.backgroundImage.replace(/url\("|"\)/g, '');
            image.onload = () => {
                loaded++;
                if (loaded === totalImages) {
                    resolve();
                }
            };
        });
    });
}



document.querySelector("#page4right").addEventListener("mouseenter",()=>{
    gsap.to("#page4right",{clipPath:` polygon(39% 0, 100% 0, 100% 100%, 39% 100%)`})
    gsap.to("#page4left",{clipPath:` polygon(0 0, 39% 0, 39% 100%, 0 100%)`})
})
document.querySelector("#page4left").addEventListener("mouseenter",()=>{
    gsap.to("#page4right",{clipPath:` polygon(61% 0, 100% 0, 100% 100%, 61% 100%)`})
    gsap.to("#page4left",{clipPath:` polygon(0 0, 61% 0, 61% 100%, 0 100%)`})
})
function canva2() {
    
    const canvas = document.querySelector("#page4>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `
    ./garvit senior canvas/van00001.png
    ./garvit senior canvas/van00002.png
    ./garvit senior canvas/van00003.png
    ./garvit senior canvas/van00004.png
    ./garvit senior canvas/van00005.png
    ./garvit senior canvas/van00006.png
    ./garvit senior canvas/van00007.png
    ./garvit senior canvas/van00008.png
    ./garvit senior canvas/van00009.png
    ./garvit senior canvas/van00010.png
    ./garvit senior canvas/van00011.png
    ./garvit senior canvas/van00012.png
    ./garvit senior canvas/van00013.png
    ./garvit senior canvas/van00014.png
    ./garvit senior canvas/van00015.png
    ./garvit senior canvas/van00016.png
    ./garvit senior canvas/van00017.png
    ./garvit senior canvas/van00018.png
    ./garvit senior canvas/van00019.png
    ./garvit senior canvas/van00020.png
    ./garvit senior canvas/van00021.png
    ./garvit senior canvas/van00022.png
    ./garvit senior canvas/van00023.png
    ./garvit senior canvas/van00024.png
    ./garvit senior canvas/van00025.png
    ./garvit senior canvas/van00026.png
    ./garvit senior canvas/van00027.png
    ./garvit senior canvas/van00028.png
    ./garvit senior canvas/van00029.png
    ./garvit senior canvas/van00030.png
    ./garvit senior canvas/van00031.png
    ./garvit senior canvas/van00032.png
    ./garvit senior canvas/van00033.png
    ./garvit senior canvas/van00034.png
    ./garvit senior canvas/van00035.png
    ./garvit senior canvas/van00036.png
    ./garvit senior canvas/van00037.png
    ./garvit senior canvas/van00038.png
    ./garvit senior canvas/van00039.png
    ./garvit senior canvas/van00040.png
    ./garvit senior canvas/van00041.png
    ./garvit senior canvas/van00042.png
    ./garvit senior canvas/van00043.png
    ./garvit senior canvas/van00044.png
    ./garvit senior canvas/van00045.png
    ./garvit senior canvas/van00046.png
    ./garvit senior canvas/van00047.png
    ./garvit senior canvas/van00048.png
    ./garvit senior canvas/van00049.png
    ./garvit senior canvas/van00050.png
    ./garvit senior canvas/van00051.png
    ./garvit senior canvas/van00052.png
    ./garvit senior canvas/van00053.png
    ./garvit senior canvas/van00054.png
    ./garvit senior canvas/van00055.png
    ./garvit senior canvas/van00056.png
    ./garvit senior canvas/van00057.png
    ./garvit senior canvas/van00058.png
    ./garvit senior canvas/van00059.png
    ./garvit senior canvas/van00060.png
    ./garvit senior canvas/van00061.png
    ./garvit senior canvas/van00062.png
    ./garvit senior canvas/van00063.png
    ./garvit senior canvas/van00064.png
    ./garvit senior canvas/van00065.png
    ./garvit senior canvas/van00066.png
    ./garvit senior canvas/van00067.png
    ./garvit senior canvas/van00068.png
    ./garvit senior canvas/van00069.png
    ./garvit senior canvas/van00070.png
    ./garvit senior canvas/van00071.png
    ./garvit senior canvas/van00072.png
    ./garvit senior canvas/van00073.png
    ./garvit senior canvas/van00074.png
    ./garvit senior canvas/van00075.png
    ./garvit senior canvas/van00076.png
    ./garvit senior canvas/van00077.png
    ./garvit senior canvas/van00078.png
    ./garvit senior canvas/van00079.png
    ./garvit senior canvas/van00080.png
    ./garvit senior canvas/van00081.png
    ./garvit senior canvas/van00082.png
    ./garvit senior canvas/van00083.png
    ./garvit senior canvas/van00084.png
    ./garvit senior canvas/van00085.png
    ./garvit senior canvas/van00086.png
    ./garvit senior canvas/van00087.png
    ./garvit senior canvas/van00088.png
    ./garvit senior canvas/van00089.png
    ./garvit senior canvas/van00090.png
    ./garvit senior canvas/van00091.png
    ./garvit senior canvas/van00092.png
    ./garvit senior canvas/van00093.png
    ./garvit senior canvas/van00094.png
    ./garvit senior canvas/van00095.png
    ./garvit senior canvas/van00096.png
    ./garvit senior canvas/van00097.png
    ./garvit senior canvas/van00098.png
    ./garvit senior canvas/van00099.png
    ./garvit senior canvas/van00100.png
    ./garvit senior canvas/van00101.png
    ./garvit senior canvas/van00102.png
    ./garvit senior canvas/van00103.png
    ./garvit senior canvas/van00104.png
    ./garvit senior canvas/van00105.png
    ./garvit senior canvas/van00106.png
    ./garvit senior canvas/van00107.png
    ./garvit senior canvas/van00108.png
    ./garvit senior canvas/van00109.png
    ./garvit senior canvas/van00110.png
    ./garvit senior canvas/van00111.png
    ./garvit senior canvas/van00112.png
    ./garvit senior canvas/van00113.png
    ./garvit senior canvas/van00114.png
    ./garvit senior canvas/van00115.png
    ./garvit senior canvas/van00116.png
    ./garvit senior canvas/van00117.png
    ./garvit senior canvas/van00118.png
    ./garvit senior canvas/van00119.png
    ./garvit senior canvas/van00120.png
    ./garvit senior canvas/van00121.png
    ./garvit senior canvas/van00122.png
    ./garvit senior canvas/van00123.png
    ./garvit senior canvas/van00124.png
    ./garvit senior canvas/van00125.png
    ./garvit senior canvas/van00126.png
    ./garvit senior canvas/van00127.png
    ./garvit senior canvas/van00128.png
    ./garvit senior canvas/van00129.png
    ./garvit senior canvas/van00130.png
    ./garvit senior canvas/van00131.png
    ./garvit senior canvas/van00132.png
    ./garvit senior canvas/van00133.png
    ./garvit senior canvas/van00134.png
    ./garvit senior canvas/van00135.png
    ./garvit senior canvas/van00136.png
    ./garvit senior canvas/van00137.png
    ./garvit senior canvas/van00138.png
    ./garvit senior canvas/van00139.png
    ./garvit senior canvas/van00140.png
    ./garvit senior canvas/van00141.png
    ./garvit senior canvas/van00142.png
    ./garvit senior canvas/van00143.png
    ./garvit senior canvas/van00144.png
    ./garvit senior canvas/van00145.png
    ./garvit senior canvas/van00146.png
    ./garvit senior canvas/van00147.png
    ./garvit senior canvas/van00148.png
    ./garvit senior canvas/van00149.png
    ./garvit senior canvas/van00150.png
    ./garvit senior canvas/van00151.png
    ./garvit senior canvas/van00152.png
    ./garvit senior canvas/van00153.png
    ./garvit senior canvas/van00154.png
    ./garvit senior canvas/van00155.png
    ./garvit senior canvas/van00156.png
    ./garvit senior canvas/van00157.png
    ./garvit senior canvas/van00158.png
    ./garvit senior canvas/van00159.png
    ./garvit senior canvas/van00160.png
    ./garvit senior canvas/van00161.png
    ./garvit senior canvas/van00162.png
    ./garvit senior canvas/van00163.png
    ./garvit senior canvas/van00164.png
    ./garvit senior canvas/van00165.png
    ./garvit senior canvas/van00166.png
    ./garvit senior canvas/van00167.png
    ./garvit senior canvas/van00168.png
    ./garvit senior canvas/van00169.png
    ./garvit senior canvas/van00170.png
    ./garvit senior canvas/van00171.png
    ./garvit senior canvas/van00172.png
    ./garvit senior canvas/van00173.png
    ./garvit senior canvas/van00174.png
    ./garvit senior canvas/van00175.png
    ./garvit senior canvas/van00176.png
    ./garvit senior canvas/van00177.png
    ./garvit senior canvas/van00178.png
    ./garvit senior canvas/van00179.png
    ./garvit senior canvas/van00180.png
    ./garvit senior canvas/van00181.png`;
        return data.split("\n")[index];
    }

    const frameCount = 181;

    const images = [];
    const imageSeq = {
        frame: 0
    };
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "top top",
            end: "bottom -500%",
            pin: true,
            markers:true,
            scrub: 2,
            scroller: "#main",
        }
    })
    tl
    .to("#page4left", {
         width:"0%",
         left:"0%",
        ease: "power2.inOut",
        duration: 5
    }, "a")
    .to("#page4right", {
      width:"0%",
      right:"0%",
        ease: "power2.inOut",
        duration: 5
     }, "a")
        .to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            duration: 30,
            onUpdate: render
        })


    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        // var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

    }



}
canva2()






// draggableImage.js

function pg5() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            pin: true,
            scroller: "#main",
            scrub: 4,
            // markers: true 
        }
    });

    tl
        .to("#p1", { top: "0%", duration: 1.6 })
        .to("#p2", { top: "8%", duration: 1.5 })
        .to("#p3", { top: "17%", duration: 1.5 })
        .to("#p4", { top: "26%", duration: 1.5 })
        .to("#p5", { top: "34%", duration: 1.5 });
}

pg5();
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
    ./garvit senior canvas/scene00001.png
    ./garvit senior canvas/scene00002.png
    ./garvit senior canvas/scene00003.png
    ./garvit senior canvas/scene00004.png
    ./garvit senior canvas/scene00005.png
    ./garvit senior canvas/scene00006.png
    ./garvit senior canvas/scene00007.png
    ./garvit senior canvas/scene00008.png
    ./garvit senior canvas/scene00009.png
    ./garvit senior canvas/scene00010.png
    ./garvit senior canvas/scene00011.png
    ./garvit senior canvas/scene00012.png
    ./garvit senior canvas/scene00013.png
    ./garvit senior canvas/scene00014.png
    ./garvit senior canvas/scene00015.png
    ./garvit senior canvas/scene00016.png
    ./garvit senior canvas/scene00017.png
    ./garvit senior canvas/scene00018.png
    ./garvit senior canvas/scene00019.png
    ./garvit senior canvas/scene00020.png
    ./garvit senior canvas/scene00021.png
    ./garvit senior canvas/scene00022.png
    ./garvit senior canvas/scene00023.png
    ./garvit senior canvas/scene00024.png
    ./garvit senior canvas/scene00025.png
    ./garvit senior canvas/scene00026.png
    ./garvit senior canvas/scene00027.png
    ./garvit senior canvas/scene00028.png
    ./garvit senior canvas/scene00029.png
    ./garvit senior canvas/scene00030.png
    ./garvit senior canvas/scene00031.png
    ./garvit senior canvas/scene00032.png
    ./garvit senior canvas/scene00033.png
    ./garvit senior canvas/scene00034.png
    ./garvit senior canvas/scene00035.png
    ./garvit senior canvas/scene00036.png
    ./garvit senior canvas/scene00037.png
    ./garvit senior canvas/scene00038.png
    ./garvit senior canvas/scene00039.png
  `;
        return data.split("\n")[index];
    }

    const frameCount = 39;

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





var tl  =  gsap.timeline()
tl
.to("#loader #outsideloader #prog",{
    transform:"scaleY(1)",
     duration:1,
  },"c")
  .to("#loader #outsideloader #prog",{
    display:"none",
     duration:1,
    
  },"d")
.to("#loader #outsideloader #left",{
x:"-100%",
   duration:1,
   delay:0.3,

},"a")
.to("#loader #outsideloader #right",{
    x:"100%",
    duration:1,
   delay:0.3,

 },"a")
 .to("#loader #insideloader #line #progress",{
    transform:"scaleX(1)",
     duration:1,
  },"e")
  .to("#loader",{
    display:"none",
     duration:1,
  },"f")


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
        .to("#p3", { top: "16%", duration: 1.5 })
        .to("#p4", { top: "24%", duration: 1.5 })
        .to("#p5", { top: "32%", duration: 1.5 });
}

pg5();

function page12Animation(){
    gsap.to(".page12-image1,.page12-image3",{
      y:"-150",
      duration:5,
      scrollTrigger:{
        scroller:"#main",
        trigger:"#page12",
        scrub:2,
        // start:"top 50%",
        // end:"top 10%",
      }
    })
    gsap.to(".page12-image2,.page12-image4",{
        y:150,
        duration:5,
        scrollTrigger:{
          scroller:"#main",
          trigger:"#page12",
          scrub:2
        }
    })
    gsap.from(".page12-line",{
      height:"0vh",
      duration:1,
        scrollTrigger:{
          scroller:"#main",
          trigger:"#page12",
          scrub:2
        }
    })
  }
  page12Animation()
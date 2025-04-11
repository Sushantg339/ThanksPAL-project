// nav
let lastScrollY = window.scrollY;
const navbar = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        navbar.style.top = "-10%"; 
    } else {
        navbar.style.top = "0"; 
    }

    lastScrollY = currentScrollY;
});
// custom cursor
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var tagline = document.querySelector("#tagline");

main.addEventListener('mousemove',function(e){
   gsap.to(cursor,{
    x: e.x,
    y: e.y
   })
})

tagline.addEventListener('mouseenter',function(){
  gsap.to(cursor,{
    scale: 4
  })
})
tagline.addEventListener('mouseleave',function(){
  gsap.to(cursor,{
    scale: 1
  })
})


// Tagline
gsap.to("#tagline h1", {
  xPercent: -81.5,
  scrollTrigger: {
    trigger: "#tagline",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -500%",
    scrub: 2,
    pin: true,
  },
  
});

window.addEventListener("load",function(){

  var tl = gsap.timeline();
  tl.from("#nav h1",{
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)"
  })

  tl.from("#nav a",{
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "cubic-bezier(0.19, 1, 0.22, 1)"
  })

  tl.from("#hero h1",{
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "cubic-bezier(0.19, 1, 0.22, 1)"
  })
  tl.from("#hero h4",{
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "cubic-bezier(0.19, 1, 0.22, 1)"
  })

  tl.fromTo("#hero button", 
    { opacity: 0, scale: 0.5},  // from
    { opacity: 1, scale: 1, duration: 0.5, ease: "cubic-bezier(0.19, 1, 0.22, 1)" }  // to
  );


})





// Animation .wrk 
gsap.from(".wrk h1", {
  scrollTrigger: {
    trigger: ".wrk h1",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  letterSpacing: "0.5em",
  duration: 2,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)"
});
gsap.from(".wrk dd", {
  scrollTrigger: {
    trigger: ".wrk dd",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  letterSpacing: "0.5em",
  duration: 1,
  stagger: 0.2,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)"
});
gsap.from(".wrk dt", {
  scrollTrigger: {
    trigger: ".wrk dt",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  x: -1000,
  duration: 1,
  stagger: 0.2,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)"
});




// Animation testimonials
gsap.from(".testmon h1", {
  scrollTrigger: {
    trigger: ".testmon h1",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  letterSpacing: "0.5em",
  duration: 2,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)"
});
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


timeline
    .to(".montain", 4, {y:-250})
    .to(".person", 4, {y:-300}, "-=4")
    .to(".content", 4, {top:"0%"}, "-=4")
    .fromTo(".image1",{y: -30,opacity: 0}, {y: 0,opacity: 1,duration: 1})
    .fromTo(".image2", {y: 40, opacity: 0}, {y: 0,opacity: 1, duration: 1}, "-=1")

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration : "200%",
    triggerHook:0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)
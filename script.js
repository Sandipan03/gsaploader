const tl=gsap.timeline();
tl.from(".top",{
    duration: 1,
    x: -1000,
    y: 25,
    rotate: -45,
    opacity: 0,
    stagger: -0.2,
    

})
.from(".content",{
    duration: 1,
    filter: "blur(8px)",
    ease: "power1.inOut"
})
// tl.to("h1",{
//     duration: 0.6,
//     y: -100,
//     scale: 1.2
// })
tl.to(".content",{
    duration: 0.5,
    scale: 1.1
}
)


// tl.to("h1",{
//     scale: 1,
//     duration: 0.5,
//     delay: 0.8,
// })
// tl.to(".content",{
//     duration: 0.5,
//     delay: 0.5,
//     filter: "blur(5px)",
//     ease: "power1.inOut"
// })
//  .to(".top",{
//     duration: 1,
//     // delay: 0.5,
//     x: 1000,
//     y: 25,
//     rotate: -45,
//     opacity: 0,
//     stagger: -0.2,
    
// })



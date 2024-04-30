var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');
var imageDiv = document.querySelector('.image');

main.addEventListener('mousemove', (dets)=>{
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.8,
        ease: "back.out(1.7)",
    })
})

imageDiv.addEventListener('mouseenter', ()=>{
    gsap.to(cursor,{
        scale: 4
    })
})

imageDiv.addEventListener('mouseleave', ()=>{
    gsap.to(cursor,{
        scale: 1
    })
})
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Observer from "gsap/src/Observer";

gsap.registerPlugin(ScrollTrigger,Observer)

gsap.fromTo('.topic', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })

gsap.from('.hero-image1', { x: 1000, duration: 1 })
gsap.from('.hero-image4', { x: -1000, duration: 1 })
gsap.from('.hero-image2', { y: 1000, duration: 1, delay: 0.2 })
gsap.from('.hero-image3', { y: 1000, duration: 1, delay: 0.2 })

gsap.from('#servieces', {
    scrollTrigger: {
        trigger: '.pics',
        start: 'top 30%',
        end: '110% 30%',
        scrub: true,
        // markers:true
    },
    scale: 0.2,
    y: 100,
    x:500
});

gsap.from('#web-features', {
    scrollTrigger: {
        trigger: '#servieces',
        start: 'top center',
        end: 'bottom 30%',
        scrub: true,
        // markers:true
    },
    scale: 0.2,
    opacity: 0.2,
    // x:-500
});

gsap.from('#app-features', {
    scrollTrigger: {
        trigger: '#web-features',
        start: 'center center',
        end: '150% 30%',
        scrub: true,
        // markers:true
    },
    opacity: 0,
    y: 300,
    // x:500
});

const menuBtn = document.getElementById('nav-menu-btn');
let menuIsOpen = false
function menuFn(){
    if(menuIsOpen){
        gsap.fromTo('#nav-menu',
            { display: 'block', opacity: 1 , duration: 2},
            {display:'none',opacity:0}
        )
        menuIsOpen = false;
    }else{
        gsap.fromTo('#nav-menu',
            { display: 'block', opacity: 0 , duration: 2},
            { opacity: 1 }
        )
        menuIsOpen = true;
    }
}
document.body.addEventListener('click',e=>{
    const menuBtmEl = e.target.closest('#nav-menu-btn');
    if(!menuBtmEl){
        if(menuIsOpen && !e.target.closest('#nav-menu'))menuFn();
        return;
    }
    menuFn();
})


gsap.from('#menu', {
    scrollTrigger: {
        trigger: '#app-features',
        start: 'top 30%',
        end: 'bottom 30%',
        scrub: true,
        // markers:true
    },
    // y: 1000
    opacity:0,
    rotateY:180
});
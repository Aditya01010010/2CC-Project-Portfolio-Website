   
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
            
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    
});


const flightPath = {
    curviness: 3,
    autoRotate: true,
    values: [
        {x: 100, y: 200}, 
        {x: 300, y: 300},
        {x: window.innerWidth, y: 0},        
    ]
}

const tween = new TimelineLite()

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)


const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0
})
.setTween(tween)
.setPin('.animation')
.addTo(controller)


$(document).ready( function () {
    AOS.init()
})

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback')
  })


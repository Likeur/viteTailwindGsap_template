import './style.css'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

// Lenis Config for smooth scrolling
const lenis_fonction = () => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
lenis_fonction()


// toggle menu

let isMenuOpen = false
const toggleMenuBtn = document.querySelector('#toggle__menu')
const tl = gsap.timeline({
    defaults:{
        duration: .6,
        ease:'expo.inOut'
    }
})
gsap.set('.link', {
    yPercent:100
})

tl.to('#bar2',{width:'0'})
  .to('#bar1', {rotate:'45deg', position:'absolute', marginTop:'3px'})
  .to('#bar3', {rotate:'-45deg', marginTop:'-3px'}, '<')
  // .to('#toggle__menu', {border:'.3px solid whitesmoke',}, '<')
  .to('#navigation', {scaleY:1, transformOrigin:'top', duration:1.5}, '<')
  .to('.link', {yPercent:0, duration:1.5, stagger:.1}, '-=.7')


tl.pause()
toggleMenuBtn.addEventListener('click', ()=>{
    isMenuOpen = !isMenuOpen
    if(isMenuOpen){
        tl.play()
    } else if(!isMenuOpen){
        tl.reverse()
        
    }
})

// nav link interraction

const liens = document.querySelectorAll('.link');
liens.forEach((lien) => {
  lien.addEventListener('mouseenter', (e) => {
    const lienSurvole = e.target;
    const autresLiens = Array.from(liens).filter((l) => l !== lienSurvole);
    gsap.to(autresLiens, { color: 'rgba(209 213 219 , 0.4)' });
  });
    
  lien.addEventListener('mouseleave', () => {
    gsap.to(liens, { color: 'white' });
  });
});
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


// your code here 
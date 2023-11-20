import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const wordAnimation = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        y: 300,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 30%',
            end: 'top top',
            toggleActions: 'play none none reverse',
            pinSpacing: false
        }
    })
}
const wordAnimationLeft = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        x: -300,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 50%',
            end: 'top top',
            toggleActions: 'play none none reverse'
        }
    })
}

const wordAnimationRight = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        x: 300,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 50%',
            end: 'top top',
            toggleActions: 'play none none reverse',
            pinSpacing: false
        }
    })
}
const scaleAnimation = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        scale: 0,
    }, {
        scale: 1.5,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 30%',
            end: 'top top',
            toggleActions: 'play none none reverse',
            pinSpacing: false
        }
    })
}

const opacAnimation = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 50%',
            end: 'top top',
            toggleActions: 'play none none reverse',
            pinSpacing: false
        }
    })
}
const pinAnimation = () => {


    gsap.to('.hero', {
        duration: 8,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.panel_about', {
        duration: 8,
        scrollTrigger: {
            trigger: '.panel_about',
            start: ' top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.body_about', {
        duration: 8,
        scrollTrigger: {
            trigger: '.body_about',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.panel_skills', {
        duration: 8,
        scrollTrigger: {
            trigger: '.panel_skills',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.body_skills', {
        duration: 8,
        scrollTrigger: {
            trigger: '.body_skills',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.panel_contact', {
        duration: 8,
        scrollTrigger: {
            trigger: '.panel_skills',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
    gsap.to('.body_contact', {
        duration: 8,
        scrollTrigger: {
            trigger: '.body_skills',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false,
            markers: {
                fontSize: '3rem'
            }
        }
    })
}

export { wordAnimation, wordAnimationLeft, wordAnimationRight, scaleAnimation, opacAnimation, pinAnimation }
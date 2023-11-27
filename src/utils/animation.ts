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
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
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
            start: 'top 70%',
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
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
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
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
        }
    })
}
const buttonScrollDownAnim = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        rotate: 0,
        display: 'block'

    }, {
        rotate: 180,
        display: 'none',
        duration: 0.01,
        scrollTrigger: {
            trigger: point,
            start: '20% bottom',
            end: '90% bottom',
            toggleActions: 'none play none reverse'
        }
    })
}
const buttonScrollUpAnim = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        rotate: 0,
        display: 'none'

    }, {
        rotate: 180,
        display: 'block',
        duration: 0.01,
        scrollTrigger: {
            trigger: point,
            start: '20% bottom',
            end: '90% bottom',
            toggleActions: 'none play none reverse'
        }
    })
}

const navAnimation = (header: any) => {
    gsap.to(header, {
        scrollTrigger: {
            start: '10% bottom',
            end: '10% bottom',
            trigger: '.about',
            onEnter() {
                header.classList.remove('header');
                header.classList.add('header_scroll');
            },
            onEnterBack() {
                header.classList.remove('header_scroll');
                header.classList.add('header');
            }
        }
    });

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
            pinSpacing: false
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
            pinSpacing: false
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
            pinSpacing: false
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
            pinSpacing: false
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
            pinSpacing: false
        }
    })
    gsap.to('.panel_contact', {
        duration: 8,
        scrollTrigger: {
            trigger: '.panel_contact',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false
        }
    })
    gsap.to('.body_contact', {
        duration: 8,
        scrollTrigger: {
            trigger: '.body_contact',
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
            pinSpacing: false
        }
    })
}

export { wordAnimation, wordAnimationLeft, wordAnimationRight, opacAnimation, buttonScrollDownAnim, buttonScrollUpAnim, navAnimation, pinAnimation }

import { useEffect, useRef } from 'react'
import './style.scss'
import { gsap } from "gsap";


function GridHero() {
    let gridOne: any = useRef(null)
    let gridTwo: any = useRef(null)
    let gridThree: any = useRef(null)
    let gridFour: any = useRef(null)
    let gridFive: any = useRef(null)
    let gridSix: any = useRef(null)
    let gridSeven: any = useRef(null)
    let gridEight: any = useRef(null)
    let tl = gsap.timeline()
    useEffect(() => {
        tl.to(gridOne, { background: 'transparent', duration: 2 }, 3).to(gridTwo, { background: 'transparent', duration: 1 }, 3.2).to(gridThree, { background: 'transparent', duration: 1 }, 3.4).to(gridFour, { background: 'transparent', duration: 1 }, 3.6).to(gridFive, { background: 'transparent', duration: 1 }, 3.8).to(gridSix, { background: 'transparent', duration: 1 }, 4).to(gridSeven, { background: 'transparent', duration: 1 }, 4.2).to(gridEight, { background: 'transparent', duration: 1 }, 4.4)
    }, [tl])

    return (
        <div className='grid' ><span className='grid-one' ref={el => gridOne = el}></span><span className='grid-two' ref={el => gridTwo = el}></span><span className='grid-three' ref={el => gridThree = el}></span ><span className='grid-four' ref={el => gridFour = el}></span><span className='grid-five' ref={el => gridFive = el}></span><span className='grid-six' ref={el => gridSix = el}></span><span className='grid-seven' ref={el => gridSeven = el}></span><span className='grid-eight' ref={el => gridEight = el}></span></div>
    )
}

export default GridHero
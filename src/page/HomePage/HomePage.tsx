import React from 'react'
import Header from '../../components/General/Header/Header';
import './style.scss'
import LogoIcons from '../../Icons/LogoIcons';

function HomePage() {
    return (
        <>
            <Header />
            <main>
                <section className='hero'>
                    <div className='grid'><span className='grid-one'></span><span className='grid-two'></span><span className='grid-three'></span ><span className='grid-four'></span><span className='grid-five'></span><span className='grid-six'></span><span className='grid-seven'></span><span className='grid-eight'></span></div>
                    <div className='intro wrap'>
                        <div className='intro-name'>
                            <h3>Persi</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime </p>
                        </div>
                        <LogoIcons />
                    </div>

                </section>
            </main>
        </>
    )
}

export default HomePage
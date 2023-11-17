import React from 'react'
import Header from '../../components/General/Header/Header';
import './style.scss'
import LogoIcons from '../../Icons/LogoIcons';
import Button from '../../components/General/button/Button';
import ScrollIcon from '../../Icons/ScrollIcon';
import profil from '../../assets/image/profil.png'
import GridBody from '../../components/Display/gridBody.tsx/GridBody';
import SectionTitle from '../../components/Display/SectionTitle/SectionTitle';
import GridHero from '../../components/Display/GridHero/GridHero';
import figma from '../../assets/image/figma.jpg'
import git from '../../assets/image/git.jpg'
import Html from '../../assets/image/html.jpg'
import Css from '../../assets/image/css.jpg'
import Tailwind from '../../assets/image/tailwin.jpg'
import Sass from '../../assets/image/sass.jpg'
import Bootstrap from '../../assets/image/bootstrap.jpg'
import Iconreact from '../../assets/image/react.jpg'
import Javascript from '../../assets/image/javascript.jpg'
import LieuIcon from '../../Icons/LieuIcon';
import EmailIcon from '../../Icons/EmailIcon';
import PhoneIcon from '../../Icons/PhoneIcon';
import FacebookIcon from '../../Icons/FacebookIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import GithubIcon from '../../Icons/GithubIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon';
import { TextField } from '@mui/material';


function HomePage() {
    return (
        <>
            <Header />
            <main>
                <section className='hero'>
                    <GridHero />
                    <div className='intro wrap'>
                        <div className='intro-name'>
                            <h3>Persi</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime </p>
                        </div>
                        <LogoIcons />
                    </div>
                    <div className="work">
                        <h1><span className='developer'>Developer</span><span className='front'>Front end</span></h1>
                        <div className="wrap_btn-hero">
                            <Button text='Contact Me' className='btn-lg' />
                            <Button text='Get CV' className='btn-lg' />
                        </div>
                    </div>
                    <div className='wrap_button-scroll'>
                        <p>Scroll</p>
                        <ScrollIcon />
                    </div>
                </section>
                <section className='about'>
                    <SectionTitle text='About' />
                    <div className="body_about  wrap">
                        <GridBody />
                        <div className="first_about">
                            <h3>Hello I am Pérsi</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voluptatum ut ullam! Enim?</p>
                        </div>
                        <div className="second_about">
                            <figure>
                                <img src={profil} alt="profil" />
                            </figure>
                            <div className="info">
                                <p>Email &nbsp;&nbsp;: <span>andriamananandroh@gmail.com</span></p>
                                <p>Education &nbsp;&nbsp; :<span>Developer front JS ,
                                    SAHA Academique  (2023 )</span></p>
                                <p>Diplôme &nbsp;&nbsp;:<span> Bacc +2 électronique informatique</span></p>
                                <p>Phone &nbsp;&nbsp;:<span>+261346810380</span></p>
                                <p>City &nbsp;&nbsp;:<span>Antananarivo/Madagascar</span></p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='myskills'>
                    <SectionTitle text='My Skills' />
                    <div className="body_skills  wrap">
                        <GridBody />
                        <div className="first_skills">
                            <div className="design">
                                <h3>UX/UI design</h3>
                                <img src={figma} alt='figma' />
                            </div>
                            <div className="outils">
                                <h3>Outils</h3>
                                <img src={git} alt='git' />
                            </div>
                        </div>
                        <div className="second_skills">
                            <div className="developer">
                                <h3>Web developer</h3>
                                <div className="work_developer">
                                    <div className="wrap_skills">
                                        <img src={Html} alt='html' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Css} alt='css' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Tailwind} alt='Tailwind' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Bootstrap} alt='Bootstrap' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Sass} alt='Sass' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Javascript} alt='Javascript' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Iconreact} alt='Iconreact' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contact'>
                    <SectionTitle text='Contact' />
                    <div className="body_contact wrap ">
                        <div className="wrap_sociaux wrap">
                            <div className="lieu">
                                <div>
                                    <LieuIcon />
                                    <p>Location  &nbsp;&nbsp;&nbsp;&nbsp;: Antananarivo/Madagascar</p>
                                </div>
                                <div>
                                    <EmailIcon />
                                    <p>Email  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  andriamananandroh@gmail.com</p>
                                </div>
                                <div>
                                    <PhoneIcon />
                                    <p>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +261346810380</p>
                                </div>



                            </div>
                            <div className="sociaux">
                                <h3>Follow me on social media</h3>
                                <div>
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <GithubIcon />
                                    <LinkedinIcon />
                                </div>
                            </div>
                        </div>
                        <form action="" className='form_contact'>
                            <TextField label="Your Name" variant="standard" fullWidth />
                            <TextField label="Your Email" variant="standard" fullWidth />
                            <TextField label="Your Subject" variant="standard" fullWidth />
                            <TextField

                                label="Your message"
                                multiline
                                rows={5}
                                variant="standard"
                                fullWidth
                            />
                            <div>
                                <Button text='Send' className='btn-xl' />
                            </div>
                        </form>
                        <div className="hr">
                            <hr />
                            <p>Portfolio@Pérsi2023</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage
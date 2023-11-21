import React, { useEffect, useRef, useState } from 'react'
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
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { wordAnimation, wordAnimationLeft, wordAnimationRight, scaleAnimation, opacAnimation } from '../../utils/animation';

import axios from 'axios';
import toast from 'react-hot-toast';
import Text from '../../components/General/Text/Text';

gsap.registerPlugin(ScrollTrigger)

interface Iuser {
    name?: string,
    email?: string,
    message?: string,
    subject?: string
}


function HomePage() {
    const [user, setUser] = useState<Iuser>({});
    const [email_i, setEmail] = useState("");
    const [name_i, setName] = useState("");
    const [subject_i, setSubjet] = useState("");
    const [message_i, setMessage] = useState("");
    let title: any = useRef(null)

    let tl = gsap.timeline();

    useEffect(() => {
        gsap.fromTo('body', { height: '100vh', overflowY: 'hidden' }, { height: 'auto', overflowY: 'auto', delay: 5 })
    }, [])
    useEffect(() => {
        const title1 = title.firstElementChild;
        const title2 = title.lastElementChild;
        tl.fromTo(title1, { x: -400, opacity: 0, ease: Power3.easeOut }, { x: 0, opacity: 1, ease: Power3.easeOut, duration: 1.5 }, 5).fromTo(title2, { x: 400, opacity: 0, ease: Power3.easeOut }, { x: 0, opacity: 1, duration: 1.3 }, 5).fromTo('.intro-name', { y: 44, opacity: 0 }, { y: 0, opacity: 1 }, 5).fromTo('.logo', { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, 5).fromTo(['.header', '.wrap_btn-hero', '.wrap_button-scroll'], { opacity: 0 }, { opacity: 1, duration: 1 }, 5)


    }, [tl])
    useEffect(() => {
        wordAnimation('.panel_about .about_title', '.panel_about')
        wordAnimation('.panel_skills .about_title', '.panel_skills')
        wordAnimation('.panel_contact .about_title', '.panel_contact')
        wordAnimation('.first_about h3', '.body_about')
        wordAnimation('.body_about p', '.body_about')
        scaleAnimation('.second_about img', '.body_about')
        wordAnimationLeft('.lieu', '.body_contact')
        wordAnimationRight('.sociaux', '.body_contact')
        wordAnimationRight('.sociaux', '.body_contact')
        opacAnimation('.form_contact', '.body_contact')




    }, [])

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setName(value)
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setEmail(value)
    }
    const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setSubjet(value)
    }
    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setMessage(value)
    }
    const serviceId: string = 'service_6xw6uo8'
    const templateId: string = 'template_5p1tudh'
    const publicKey: string = '6pMN3V5chFWqYFJTd'

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            ...user
        }

    }


    const login = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!user.email || !user.name || !user.subject || !user.message) {
            toast.error("veullez remplir tous les champs")
        }
        else {
            try {
                await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

                setUser({})
                setEmail('')
                setMessage('')
                setName('')
                setSubjet('')

                toast.success("Envoyé")

            } catch (error) {
                toast.error("information incorrect")
                console.error(error)
            }
        }

    }
    return (
        <>
            <Header className='header ' />
            <main>
                <section className='hero '>
                    <GridHero />
                    <div className='intro wrap'>
                        <div className='intro-name'>
                            <h3 className='second-h3'>Persi</h3>
                            <Text tag='p' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime' color="#817474" className='body_text' />
                        </div>
                        <LogoIcons className='logo' />
                    </div>
                    <div className="work">
                        <h1 className='h1' ref={el => title = el}><span className='developer'>Developer</span><span className='front'>Front end</span></h1>
                        <div className="wrap_btn-hero">
                            <Button text='Contact Me' className='btn-lg' />
                            <Button text='Show CV' className='btn-lg' />
                        </div>
                    </div>
                    <div className='wrap_button-scroll'>
                        <p className='body_text'>Scroll</p>
                        <ScrollIcon />
                    </div>
                </section>

                <section className='about'>
                    <SectionTitle text='About' className='panel_about' />
                    <div className="body_about  wrap ">
                        <GridBody />
                        <div className="first_about">
                            <h3 className='first-h3'>Hello I am Pérsi</h3>
                            <Text tag='p' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voluptatum ut ullam! Enim?' className='body_textgm' />
                        </div>
                        <div className="second_about">
                            <figure>
                                <img src={profil} alt="profil" />
                            </figure>
                            <div className="info">

                                <p className='body_textgm'>Email &nbsp;&nbsp;: <span>andriamananandroh@gmail.com</span></p>
                                <p className='body_textgm'>Education &nbsp;&nbsp; :<span>Developer front JS ,
                                    SAHA Academique  (2023 )</span></p>
                                <p className='body_textgm'>Diplôme &nbsp;&nbsp;:<span> Bacc +2 électronique informatique</span></p>
                                <p className='body_textgm'>Phone &nbsp;&nbsp;:<span>+261346810380</span></p>
                                <p className='body_textgm'>City &nbsp;&nbsp;:<span>Antananarivo/Madagascar</span></p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <section className='myskills'>
                    <SectionTitle text='My Skills' className='panel_skills' />
                    <div className="body_skills  wrap test">
                        <GridBody />
                        <div className="first_skills">
                            <div className="design">
                                <h3 className='second-h3 '>UX/UI design</h3>
                                <img src={figma} alt='figma' />
                            </div>
                            <div className="outils">
                                <h3 className='second-h3 '>Outils</h3>
                                <img src={git} alt='git' />
                            </div>
                        </div>
                        <div className="second_skills">
                            <div className="developer">
                                <h3 className='second-h3 '>Web developer</h3>
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
                    <SectionTitle text='Contact' className='panel_contact' />
                    <div className="body_contact wrap test">
                        <div className="wrap_sociaux wrap">
                            <div className="lieu">
                                <div>
                                    <LieuIcon />
                                    <p className='body_text'>Location  &nbsp;&nbsp;&nbsp;&nbsp;: Antananarivo/Madagascar</p>
                                </div>
                                <div>
                                    <EmailIcon />
                                    <p className='body_text'>Email  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  andriamananandroh@gmail.com</p>
                                </div>
                                <div>
                                    <PhoneIcon />
                                    <p className='body_text'>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +261346810380</p>
                                </div>



                            </div>
                            <div className="sociaux">
                                <h3 className='second-h3'>Follow me on social media</h3>
                                <div>
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <GithubIcon />
                                    <LinkedinIcon />
                                </div>
                            </div>
                        </div>
                        <form action="" className='form_contact'>
                            <TextField label="Your Name" variant="standard" onChange={handleChangeName} name='name' fullWidth value={name_i} />
                            <TextField label="Your Email" variant="standard" onChange={handleChangeEmail} name='email' fullWidth value={email_i} />
                            <TextField label="Your Subject" variant="standard" fullWidth name='subject' onChange={handleChangeSubject} value={subject_i} />
                            <TextField
                                label="Your message"
                                multiline
                                rows={5}
                                variant="standard"
                                fullWidth name='message' onChange={handleChangeMessage} value={message_i}
                            />
                            <div>
                                <Button postUser={login} text='Send' className='btn-xl' />
                            </div>
                        </form>
                        <div className="hr">
                            <hr />
                            <p>Portfolio@Pérsi2023</p>
                        </div>
                    </div>
                </section>  */}
            </main>

        </>
    )
}

export default HomePage


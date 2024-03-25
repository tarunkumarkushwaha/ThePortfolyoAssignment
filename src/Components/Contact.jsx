import React, { forwardRef, useEffect, useRef } from 'react'
import arrow from '../assets/images/arrow-forward.svg'
import footshape from '../assets/images/footer-shape.svg'

const Contact = forwardRef((prop, ref) => {

    const revealElement1 = useRef();
    const revealElement2 = useRef();
    const revealElement3 = useRef();

    const revealElements = [revealElement1, revealElement2, revealElement3]

    const scrollReveal = function () {
        for (let i = 0; i < revealElements.length; i++) {
            const elementIsInScreen = revealElements[i].current.getBoundingClientRect().top < window.innerHeight / 1.15;

            if (elementIsInScreen) {
                revealElements[i].current.classList.add("revealed");
            } else {
                revealElements[i].current.classList.remove("revealed");
            }
        }
    }

    useEffect(() => {
        scrollReveal();
        window.removeEventListener('scroll', scrollReveal);
        window.addEventListener('scroll', scrollReveal, { passive: true });
        return () => window.removeEventListener('scroll', scrollReveal);
    }, []);

    return (
        <>
            <div ref={ref} className="footer max-sm:pl[20%]">

                <div className="footer-top section" id="contact">
                    <div className="container md:ml-52 ml-28">

                        <p className="section-subtitle" ref={revealElement1} data-reveal>Contact Us</p>

                        <h2 className="h2 section-title" ref={revealElement2} data-reveal>
                            Work inquiry, Job oportunities? Send Message.
                        </h2>

                        <a href="#" className="btn-icon" ref={revealElement3} data-reveal>
                            <img src={arrow} width="43" height="20" loading="lazy" alt="arrow-forward icon" />
                        </a>

                        <div className="flex flex-col justify-center m-5 rounder-md">
                            <div
                                className='flex flex-col justify-center mx-auto p-32 rounded-[10%] pt-4 border-4 border-slate-500 '
                            ><p className="navbar-title">My Address</p>

                                <address className="navbar-text">
                                    {prop.data.user.about.address}
                                </address>

                            <p className="navbar-text">
                                For enquiry call at
                                <a href={prop.data.user.about.phoneNumber} className="contact-link">{prop.data.user.about.phoneNumber}</a>
                            </p>
                            <img src={footshape} width="185" height="134" loading="lazy" alt="" className="shape" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Contact
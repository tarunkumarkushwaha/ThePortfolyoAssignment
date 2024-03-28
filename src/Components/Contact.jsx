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
            <div ref={ref} className="flex flex-col justify-center items-center pt-40">

                <div className="flex flex-col justify-center items-center md:ml-4 ml-44">
                    <img src={footshape} width="185" height="134" loading="lazy" alt="" className="shape absolute left-3" />
                    <div className="btn-icon rounded-full p-4 w-24 h-24" ref={revealElement3} data-reveal>
                        <img src={arrow} width="43" height="20" loading="lazy" alt="arrow-forward icon" />
                    </div>
                    <p className="section-subtitle py-4" ref={revealElement1} data-reveal>Contact Us</p>

                    <h2 className="font-normal md:text-8xl text-center text-5xl py-6" ref={revealElement2} data-reveal>
                        Work inquiry, Job oportunities? Send Message.
                    </h2>



                    <div className="flex flex-col justify-center m-5 rounder-md">
                        <div
                            className='flex flex-col items-center mx-auto p-24 mb-10 rounded-[10%] bg-zinc-800 pt-4 border-4 border-zinc-700 '
                        >
                            <p className="navbar-title pt-10">My Address</p>

                            <address className="text-center">
                                {prop.data.user.about.address}
                            </address>

                            <p className="navbar-text">
                                For enquiry call at
                                <a href={prop.data.user.about.phoneNumber} className="contact-link">
                                    {prop.data.user.about.phoneNumber}</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Contact
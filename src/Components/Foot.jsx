import React, { forwardRef, useEffect, useRef } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import arrow from '../assets/images/arrow-forward.svg'
import foot1 from '../assets/images/footer-1.jpg'
import foot2 from '../assets/images/footer-2.jpg'
import foot3 from '../assets/images/footer-3.jpg'
import foot4 from '../assets/images/footer-4.jpg'
import logo from '../assets/images/logo.svg'
import footshape from '../assets/images/footer-shape.svg'
import footbg from '../assets/images/footer-bg.jpg'

const Foot = forwardRef((prop, ref) => {

  const revealElement1 = useRef();
  const revealElement2 = useRef();
  const revealElement3 = useRef();
  const revealElement4 = useRef();
  const revealElement5 = useRef();
  const revealElement6 = useRef();
  const revealElement7 = useRef();

  const revealElements = [revealElement1, revealElement2, revealElement3, revealElement4,
    revealElement5, revealElement6, revealElement7]

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
      <footer ref={ref} className="footer">

        <div className="footer-top section" id="contact">
          <div className="container">

            <p className="section-subtitle" ref={revealElement1} data-reveal>Contact Us</p>

            <h2 className="h2 section-title" ref={revealElement2} data-reveal>
              Work inquiry, Job oportunities? Send Message.
            </h2>

            <a href="#" className="btn-icon" ref={revealElement3} data-reveal>
              <img src={arrow} width="43" height="20" loading="lazy" alt="arrow-forward icon" />
            </a>

            <img src={foot1} width="159" height="176" loading="lazy" alt="photography"
              className="abs-img abs-img-1" ref={revealElement4} data-reveal />

            <img src={foot2} width="265" height="275" loading="lazy" alt="photography"
              className="abs-img abs-img-2" ref={revealElement5} data-reveal />

            <img src={foot3} width="303" height="272" loading="lazy" alt="photography"
              className="abs-img abs-img-3" ref={revealElement6} data-reveal />

            <img src={foot4} width="175" height="175" loading="lazy" alt="photography"
              className="abs-img abs-img-4" ref={revealElement7} data-reveal />

            <img src={footshape} width="185" height="134" loading="lazy" alt="" className="shape" />

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">

            <a href="#" className="logo">
              {/* <img src={logo} width="40" height="40" loading="lazy" alt="Richard home" />
               */}
               <p className="imglogo">{prop.data.user.about.name.trim()[0]}</p>
            </a>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                   <FacebookIcon/>
                </a>
              </li>

              <li>
                <a href="#" className="social-link"><InstagramIcon/></a>
              </li>

              <li>
                <a href="#" className="social-link"><XIcon/></a>
              </li>

            </ul>

            <p className="copyright">Made with love</p>

          </div>
        </div>

        <div className="footer-bg has-before">
          <img src={footbg} width="1920" height="1135" loading="lazy" alt="photography"
            className="img-cover" />
        </div>

      </footer>


    </>
  )
})

export default Foot
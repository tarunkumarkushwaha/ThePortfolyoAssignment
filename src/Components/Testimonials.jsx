import React, { forwardRef, useEffect, useRef } from 'react'

const Testimonials = forwardRef((prop, ref) => {
    const revealElement1 = useRef();
    // const revealElement2 = useRef();
    // const revealElement3 = useRef();
    // const revealElement4 = useRef();
    // const revealElement5 = useRef();
    // const revealElement6 = useRef();
    // const revealElement7 = useRef();
    // const revealElement8 = useRef();
    // const revealElement9 = useRef();
    // const revealElement10 = useRef();
    // const revealElement11 = useRef();
    // const revealElement12 = useRef();
    // const revealElement13 = useRef();
  
    const revealElements = [revealElement1
    //     ,
    //      revealElement2, revealElement3, revealElement4,
    //   revealElement5, revealElement6, revealElement7, revealElement8, revealElement9,
    //   revealElement10, revealElement11, revealElement12, revealElement13
    ]
  
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
        <section ref={ref} >
         <div ref={revealElement1}> Testimonials</div>
        
        </section>
        </>
  )
})

export default Testimonials
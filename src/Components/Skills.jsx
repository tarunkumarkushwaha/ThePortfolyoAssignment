import { forwardRef, useEffect, useRef } from "react"
import aboutshape2 from '../assets/images/about-shape-2.svg'
import aboutshape3 from '../assets/images/about-shape-3.svg'

const Skills = forwardRef((prop, ref) => {
  const revealElement1 = useRef();
  const revealElement2 = useRef();
  const revealElement3 = useRef();

  const revealElements = [revealElement1, revealElement2, revealElement3]
  const List = prop.data.user.skills;
  const myList1 = List.slice(0, 10);
  const myList2 = List.slice(10, 20);
  // console.log(myList1,myList2)

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
      <section ref={ref} className="section about" id="about" aria-label="about me">
        <div className="flex-col h3">
          <h1 className="sub-title" ref={revealElement1}>Skills</h1>
        </div>
        <div className="container">

          <div className="about-content">

            <div className="wrapper has-before" ref={revealElement2} data-reveal="right">

              <div className="section-text">
                {myList1.map((item, index) => (
                  <div key={index}>
                    <span>{item.name} <small>{item.percentage}</small></span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: 95 + "%" }}></div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
          <div className="about-content">

            {/* <h2 className="h2 section-title" ref={revealElement1} data-reveal="left">
              Skills
            </h2> */}

            <div className="wrapper has-before" ref={revealElement3} data-reveal="left">

              <div className="section-text">
                {myList2.map((item, index) => (
                  <div key={index}>
                    <span>{item.name} <small>{item.percentage}</small></span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: 95 + "%" }}></div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
});

export default Skills
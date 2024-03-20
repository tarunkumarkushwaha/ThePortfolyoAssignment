import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Mainpage from './Components/Mainpage'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Foot from './Components/Foot'
import NoData from './Components/NoData'
import scrooldn from './assets/images/scroll-down.svg'
import shape from './assets/images/gallery-shape.svg'
import Testimonials from './Components/Testimonials'


function App() {
  const [data, setData] = useState()
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const skills = useRef();
  const home = useRef();
  const about = useRef();
  const services = useRef();
  const portfolio = useRef();
  const contacts = useRef();
  const testimonials = useRef();
  const backTopBtn = useRef();

  useEffect(() => {
    let API_KEY = `${import.meta.env.VITE_API_KEY}`
    fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  console.log(data)
  console.log(scrollPercentage)

  useEffect(() => {
    document.title = data ? data.user.about.name : "loading";
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;
      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
      setScrollPercentage(totalScrollPercent.toFixed(0));
      if (totalScrollPercent > 5) {
        backTopBtn.current.classList.add("show");
      } else {
        backTopBtn.current.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {data ?
        <>
          <Navbar data={data} testimonials={testimonials} services={services} skills={skills} home={home} about={about} contacts={contacts} portfolio={portfolio} />
          <main>
            <article>
              <Mainpage data={data} ref={home} />
              <Service data={data} ref={services} />
              <Portfolio data={data} ref={portfolio} />
              <Skills data={data} ref={skills} />
              <About data={data} ref={about} />
              <Testimonials data={data} ref={testimonials} />
              <div onClick={() => services.current.scrollIntoView()} className="scroll-down">
                <img src={scrooldn} width="40" height="66" loading="lazy" alt="mouse scroll" />
              </div>
              <img src={shape} width="220" height="78" loading="lazy" alt="" className="shape" />

            </article>
          </main>
          <Foot data={data} ref={contacts} />


          <a href="#top" class="back-top-btn" aria-label="back to top" ref={backTopBtn} data-back-top-btn>{scrollPercentage}%</a>





          {/* <!-- 
      - #CUSTOM CURSOR
    --> */}

          {/* <div class="cursor" data-cursor></div> */}
        </> : <NoData />
      }
    </>
  )
}

export default App

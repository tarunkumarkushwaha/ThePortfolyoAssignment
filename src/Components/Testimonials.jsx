import React, { forwardRef, useRef } from 'react'
import arrow from '../assets/images/arrow-forward.svg'

const Testimonials = forwardRef((prop, ref) => {
  let experiencedata = prop.data.user.timeline
  const revealElement1 = useRef();
  let testimonialData = prop.data.user.testimonials;

  return (
    <>
      <section ref={ref} >
        <div className="flex-col h3">
          <h1 className="sub-title">Testimonials</h1>
        </div>
        <div className="flex-row">{testimonialData.map((item, index) => (

          <div key={index} className="test-box">
            <img src={item.image.url} alt={item.image.url} />
            <div className="blog-text">
              <h3>{item.name}</h3>
              <p>{item.review}</p>
            </div>
          </div>
        ))}</div>


        <div ref={revealElement1} className="flex-col h3">
          <h1 className="sub-title" ref={revealElement1}>Experience</h1>
        </div>

        <div className="flex-col">
          {experiencedata.map((item, i) => (
            <div class="timeline-label">
              <h1>{item.company_name}</h1>
              <h2>{item.jobLocation}</h2>
              <h2>{item.jobTitle} <span>{item.startDate.split("T")[0]} -- {item.endDate.split("T")[0]}</span></h2>
              <p> {item.summary}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  )
})

export default Testimonials
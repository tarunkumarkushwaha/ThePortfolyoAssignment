import React from 'react'
import { forwardRef } from "react"

const Service = forwardRef((prop, ref) => {
  const myData = prop.data.user.services;
  return (
    <>
      <section ref={ref} className="section category p-10" aria-label="services">
        <div className="container">

          <ul className="category-list">
            {myData.map((item, index) => (
              <li key={index} className="category-item">
                <a href="#" className="category-card">

                  <h3 className="h4 card-title">{item.name}</h3>

                  <figure className="card-banner img-holder" style={{ width: 270, zIndex: 1, height: 320, borderRadius: 10, backgroundImage: `url(${item.image.url})` }}>
                    <div className="service-card flex flex-col justify-end items-center" style={{ width: 270, zIndex: 1, height: 320, borderRadius: 10 }}>
                      <p className='text-3xl p-10 font-serif font-bold'>price - {item.charge}</p>
                      <p className='text-justify  text-slate-300'>
                        <span className='inline'>Description-</span> {item.desc}
                      </p>
                    </div>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
})

export default Service
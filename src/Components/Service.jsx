import React from 'react'
import { forwardRef } from "react"

const Service = forwardRef((prop, ref) => {
  const myData = prop.data.user.services;
  return (
    <>
      <section ref={ref} className="section category" aria-label="photography category">
        <div className="container">

          <ul className="category-list">
            {myData.map((item, index) => (
              <li className="category-item">
                <a href="#" className="category-card">

                  <h3 className="h4 card-title">{item.name}</h3>

                  <figure className="card-banner img-holder" style={{ width: 270, zIndex: 1, height: 320, borderRadius: 10, backgroundImage: `url(${item.image.url})` }}>
                    <div className="service-card flex-col" style={{ width: 270, zIndex: 1, height: 320, borderRadius: 10 }}>
                      <p>price - {item.charge}</p>
                      <p>description - {item.desc}</p>
                    </div>
                  </figure>
                </a>
              </li>
            ))}

          </ul>

          {/* <ul className="category-list">

            <li className="category-item" ref={revealElement1} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Landscape,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category1} width="600" height="690" loading="lazy" alt="Landscape"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement2} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Model,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category2} width="600" height="690" loading="lazy" alt="Model"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement3} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Street,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category3} width="600" height="690" loading="lazy" alt="Street"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement4} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Product,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category4} width="600" height="690" loading="lazy" alt="Product"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement5} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Fashion,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category2} width="600" height="690" loading="lazy" alt="Fashion"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement6} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Film,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category5} width="600" height="690" loading="lazy" alt="Film"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement7} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Architecture,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category6} width="600" height="690" loading="lazy" alt="Architecture"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement8} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Event,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category7} width="600" height="690" loading="lazy" alt="Event"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement9} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Wedding,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category8} width="600" height="690" loading="lazy" alt="Wedding"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement10} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">People,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category9} width="600" height="690" loading="lazy" alt="People"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement11} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Event,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category7} width="600" height="690" loading="lazy" alt="Event"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement12} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Food,</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category10} width="600" height="690" loading="lazy" alt="Food"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" ref={revealElement13} data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Health & Wellness.</h3>

                <figure className="card-banner img-holder" style={{ width: 600, height: 690 }}>
                  <img src={category11} width="600" height="690" loading="lazy"
                    alt="Health & Wellnes" className="img-cover" />
                </figure>

              </a>
            </li>

          </ul> */}

        </div>
      </section>
    </>
  )
})

export default Service
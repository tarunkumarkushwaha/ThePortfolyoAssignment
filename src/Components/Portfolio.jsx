import React, { forwardRef } from 'react'
import arrow from '../assets/images/arrow-forward.svg'

const Portfolio = forwardRef((prop, ref) => {
  return (
    <>
      <section ref={ref} className="section gallery" id="gallery">

        <div className="container">
          <div className="flex-col h3">
            <h1 className="sub-title">Projects</h1>
          </div>
          <ul className="gallery-list">

            <li className="gallery-item" data-reveal>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[0].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[0].liveurl} className="card-title">{prop.data.user.projects[0].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[0].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>
              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[1].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[1].liveurl} className="card-title">{prop.data.user.projects[1].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[1].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>

            </li>

            <li className="gallery-item" data-reveal>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[2].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[2].liveurl} className="card-title">{prop.data.user.projects[2].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[2].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>
              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[3].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[3].liveurl} className="card-title">{prop.data.user.projects[3].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[3].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>

            </li>

            <li className="gallery-item" data-reveal>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[4].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[4].liveurl} className="card-title">{prop.data.user.projects[4].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[4].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>
              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[5].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[5].liveurl} className="card-title">{prop.data.user.projects[5].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[5].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>

            </li>

            <li className="gallery-item" data-reveal>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[6].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[6].liveurl} className="card-title">{prop.data.user.projects[6].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[6].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>
              <div className="gallery-card">

                <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
                  <img src={prop.data.user.projects[7].image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                    className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h6">
                    <a href={prop.data.user.projects[7].liveurl} className="card-title">{prop.data.user.projects[7].title}</a>
                  </h3>

                  <span className="card-tag">{prop.data.user.projects[7].techStack}</span>
                </div>

                <a href="#" className="btn-icon">
                  <img src={arrow} width="43" height="20" loading="lazy"
                    alt="arrow-forward icon" />
                </a>

              </div>

            </li>

          </ul>



        </div>
      </section>
    </>
  );
});

export default Portfolio
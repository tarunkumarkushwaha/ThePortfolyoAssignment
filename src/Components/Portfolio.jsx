import React, { forwardRef } from 'react'
import arrow from '../assets/images/arrow-forward.svg'

const Portfolio = forwardRef((prop, ref) => {
  let sequences = prop.data.user.projects.map((item) => { return item.sequence }).sort()
  let projectdata = sequences.map(char => prop.data.user.projects.find(res => res.sequence === char))
  let myData = projectdata.length % 2 === 1 ? projectdata.slice(0, -1)
    :
    prop.data.user.projects;

  let size = 2;
  let projects = [];
  for (var i = 0; i < myData.length; i += size) {
    projects.push(myData.slice(i, i + size));
  }

  return (
    <>
      <section ref={ref} className="section gallery" id="gallery">

        <div className="container sm:pl-16 pl-52">
          <div className="flex-col h3">
            <h1 className="sub-title flex justify-center">Projects</h1>
          </div>
          <ul className="gallery-list flex flex-wrap justify-center">
            {projects.map((items, index) => {
              return <li key={index} className="gallery-item">
                {items.map((item, i) => {
                  return <div key={item.title + i} className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{ width: 250, height: 300 }}>
                      <img src={item.image.url} width="250" height="300" loading="lazy" alt="The Drunken"
                        className="img-cover" />
                    </figure>

                    <div className="card-content">
                      <h3 className="h6">
                        <a href={item.liveurl} className="card-title">{item.title}</a>
                      </h3>

                      <span className="card-tag">{item.techStack}</span>
                    </div>

                    <a href="#" className="btn-icon zoom">
                      <img className='zoom' src={arrow} width="43" height="20" loading="lazy"
                        alt="arrow-forward icon" />
                    </a>

                  </div>
                }
                )}
              </li>
              // console.log(items)
              // return items.map((item, index) => {console.log(item)
              //   // return <li className="gallery-item">
              //   //   <div key={index} className="gallery-card">

              //   //     <figure className="card-banner img-holder has-before" style={{ width: 250, height: 300 }}>
              //   //       <img src={item.image.url} width="250" height="300" loading="lazy" alt="The Drunken"
              //   //         className="img-cover" />
              //   //     </figure>

              //   //     <div className="card-content">
              //   //       <h3 className="h6">
              //   //         <a href={item.liveurl} className="card-title">{item.title}</a>
              //   //       </h3>

              //   //       <span className="card-tag">{item.techStack}</span>
              //   //     </div>

              //   //     <a href="#" className="btn-icon">
              //   //       <img src={arrow} width="43" height="20" loading="lazy"
              //   //         alt="arrow-forward icon" />
              //   //     </a>

              //   //   </div>
              //   //   </li>
              //   })

            })}

          </ul>
        </div>
      </section >
    </>
  );
});

export default Portfolio
import React, { forwardRef, useEffect, useRef } from 'react'

const Testimonials = forwardRef((prop, ref) => {
  let experiencedata = prop.data.user.timeline
  let testimonialData = prop.data.user.testimonials;

  const revealElement1 = useRef();
  const revealElement2 = useRef();
  // const revealElement3 = useRef();

  const revealElements = [revealElement1, revealElement2]
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

  let testimonials = prop.data.user.testimonials

  let size = 3;
  let testimonialsitems = [];
  for (var i = 0; i < testimonials.length; i += size) {
    testimonialsitems.push(testimonials.slice(i, i + size));
  }
  console.log("new arr", testimonialsitems);

  useEffect(() => {
    scrollReveal();
    window.removeEventListener('scroll', scrollReveal);
    window.addEventListener('scroll', scrollReveal, { passive: true });
    return () => window.removeEventListener('scroll', scrollReveal);
  }, []);

  return (
    <>
      <section ref={ref} className='md:ml-1 ml-40'>
        <div ref={revealElement1} className="flex justify-center h3">
          <h1 className="sub-title">Testimonials</h1>
        </div>
        <div ref={revealElement2} className="flex flex-col ">{testimonialsitems.map((items, index) => {
          return <div key={index} className="testimonial-card ml-0">
            {items.map((item) => {
              return <div key={index} className="test-box bg-gray-800 p-8 min-w-[300px] min-h-[400px]">
                <div className='flex justify-center'><img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image.url} alt={item.image.url} />
                </div>
                <div className="blog-text">
                  <h3 className='flex text-3xl p-2 font-bold justify-center mt-5 mb-2'>{item.name}</h3>
                  <p className='flex justify-center text-gray-400 text-center'>{item.review}</p>
                </div>
              </div>
            })}
          </div>
        }
        )}
        </div>
      </section>
    </>
  )
})

export default Testimonials
import React, { forwardRef, useEffect, useRef } from 'react'

const Experience = forwardRef((prop, ref) => {
    let sequences = prop.data.user.timeline.map((item)=>{return item.sequence}).sort()
    let experiencedata = [...new Set(sequences.map(char=>prop.data.user.timeline.find(res=>res.sequence===char)) )]

    const revealElement1 = useRef();
    const revealElement2 = useRef();
    const revealElement3 = useRef();

    const revealElements = [revealElement1, revealElement2, revealElement3]

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
            <section ref={ref} className='w-full'>
                <div className="h3 md:ml-1 ml-40 ">
                    <h1 className="sub-title flex justify-center" ref={revealElement1}>Experience</h1>
                </div>
                <div className="flex flex-row gap-0 w-full md:ml-1 ml-16 justify-center mb-28">
                    <div className='relative top-28 w-4 border rounded-tl-full border-red-100  bg-red-900 max-h-full'>
                    </div>
                    <div className="flex-col" ref={revealElement2} data-reveal>
                        {experiencedata.map((item, i) => {
                            return <div key={i} className='p-20 relative left-0 flex flex-col'>
                                <div className='relative top-8 right-20 h-4 w-20 border border-red-200 bg-red-900'></div>
                                <ul className=' border border-red-200  bg-zinc-800 rounded-2xl p-10'>
                                    <li>
                                        <h1 className='text-3xl text-zinc-300 font-serif font-bold my-2'>{item.company_name}</h1>
                                    </li>
                                    <li>
                                        <h2 className='text-xl text-zinc-300 font-bold my-2'>{item.jobLocation}</h2>
                                    </li>
                                    <li>
                                        <h2 className='text-3xl mt-3 text-zinc-300'>{item.jobTitle}</h2>
                                    </li>
                                    <li>
                                        <h2 className='mt-3  text-zinc-300'>{item.startDate.split("T")[0]} to {item.endDate.split("T")[0]}</h2>
                                    </li>
                                    <li>
                                        <p className='mt-3  text-zinc-300'> {item.summary}</p>
                                    </li>
                                </ul>
                            </div>
                        })}
                        <div ref={revealElement3} className='relative h-4 right-20 bg-red-900 border border-red-100'></div>
                        
                    </div>
                </div>

            </section>
        </>
    )
})

export default Experience
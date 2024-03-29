import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursor = useRef()

  useEffect(() => {
    let mousemovefn = (event) => {
      setTimeout(function () {
        let tags = event.target.className.split(' ')
        for (let i = 0; i < tags.length; i++) {
          if (tags[i] == "zoom") {
            cursor.current.classList.add("hovered");
          }
          else { cursor.current.classList.remove("hovered") }
        }
        // console.log(event.target.className.split(' '))
        cursor.current.style.top = `${event.clientY}px`;
        cursor.current.style.left = `${event.clientX}px`;
      }, 100);
    }
    document.body.addEventListener("mousemove", mousemovefn);


    return () => {
      document.body.removeEventListener("mousemove", mousemovefn);
    };
  }, []);
  return (
    <>
      <div ref={cursor} className="cursor" data-cursor></div>
    </>
  )
}

export default Cursor
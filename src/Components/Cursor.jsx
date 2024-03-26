import React, { useEffect, useRef } from 'react'

const Cursor = () => {

  const cursor = useRef()

  // const anchorElements = document.querySelectorAll("a");
  // const buttons = document.querySelectorAll("button");



  // // add hover effect on cursor, when hover on any button or hyperlink
  // addEventOnElements(anchorElements, "mouseover", hoverActive);
  // addEventOnElements(anchorElements, "mouseout", hoverDeactive);
  // addEventOnElements(buttons, "mouseover", hoverActive);
  // addEventOnElements(buttons, "mouseout", hoverDeactive);



  useEffect(() => {
    // // add cursor hoverd class
    // const hoverActive = function () { cursor.current.classList.add("hovered"); }

    // // remove cursor hovered class
    // const hoverDeactive = function () { cursor.current.classList.remove("hovered"); }

    // change cursorElement position based on cursor move

      // // add disabled class on cursorElement, when mouse out of body
  // document.body.addEventListener("mouseout", function () {
  //   cursor.classList.add("disabled");
  // });

  // // remove diabled class on cursorElement, when mouse in the body
  // document.body.addEventListener("mouseover", function () {
  //   cursor.classList.remove("disabled");
  // });
    let mousemovefn = (event) => {
      setTimeout(function () {
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
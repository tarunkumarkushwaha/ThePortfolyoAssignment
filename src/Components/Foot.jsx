import React, { forwardRef, useRef } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import scrooldn from '../assets/images/scroll-down.svg'

const Foot = ({data,home}) => {

  return (
    <>
      <footer className="footer max-sm:pl[20%]">
        <div className="footer-bottom">
          <div className="container ml-28">

            {/* <a href="#" className="logo">
              <p className="imglogo">{data.user.about.name.trim()[0]}</p>
            </a> */}
            <p className="copyright">Made with love</p>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a href="#" className="social-link"><InstagramIcon /></a>
              </li>

              <li>
                <a href="#" className="social-link"><XIcon /></a>
              </li>

            </ul>

            <div title='Go to top' onClick={() => home.current.scrollIntoView()} className="cursor-pointer flex justify-center scroll-down">
              <img src={scrooldn} width="40" height="66" loading="lazy" alt="mouse scroll" />
            </div>

          </div>
        </div>

      </footer>


    </>
  )
}

export default Foot
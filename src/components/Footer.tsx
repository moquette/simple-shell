import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiArrowUpLine,
} from 'react-icons/ri'

export default function Footer() {
  return (
    <footer>
      <div className="icons container flex flex-wrap mt-7 mb-20 max-w-lg mx-auto justify-center align-center text-gray-400">
        <div className="w-1/3 mb-4 text-center">
          <NavLink to="/" className="hover:text-black">
            <RiHome2Line className="text-5xl" />
            <span className="text-sm">Home</span>
          </NavLink>
        </div>
        <div className="w-1/3 mb-4 text-center">
          <NavLink to="/resume" className="hover:text-black">
            <RiQuillPenLine className="text-5xl" />
            <span className="text-sm">Resume</span>
          </NavLink>
        </div>
        <div className="w-1/3 mb-4 text-center">
          <NavLink to="/portfolio" className="hover:text-black">
            <RiLayoutTop2Line className="text-5xl" />
            <span className="text-sm">Portfolio</span>
          </NavLink>
        </div>
        <div className="w-1/3 mb-4 text-center">
          <a
            href="https://github.com/moquette/"
            target="_blank"
            className="hover:text-black"
            rel="noreferrer"
          >
            <RiGithubLine className="text-5xl" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
        <div className="w-1/3 mb-4 text-center">
          <a
            href="https://www.linkedin.com/in/jmoquette/"
            target="_blank"
            className="hover:text-black"
            rel="noreferrer"
          >
            <RiLinkedinLine className="text-5xl" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
        <div className="w-1/3 mb-4 text-center">
          <a
            href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
            target="_blank"
            className="hover:text-black"
            rel="noreferrer"
          >
            <RiMailLine className="text-5xl" />
            <span className="text-sm">Contact</span>
          </a>
        </div>
        <div className="mb-4 mt-6 text-center justify-center">
          <a
            href="#top"
            className="hover:text-black text-center"
            rel="noreferrer"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <RiArrowUpLine className="text-5xl" />
            <span className="text-sm">Top of Page</span>
          </a>
        </div>
      </div>
      <p className="copyright">
        Simple-Shell
        <br />
        Copyright &copy;{new Date().getFullYear()} Joaquin A. Moquette
        <br />
        All Rights Reserved.
      </p>
    </footer>
  )
}

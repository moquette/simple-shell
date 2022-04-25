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
      <div className="icon-box">
        <div>
          <NavLink to="/">
            <RiHome2Line />
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/resume">
            <RiQuillPenLine />
            Resume
          </NavLink>
        </div>
        <div>
          <NavLink to="/portfolio">
            <RiLayoutTop2Line />
            Portfolio
          </NavLink>
        </div>
        <div>
          <a
            href="https://github.com/moquette/"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubLine />
            GitHub
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/jmoquette/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinLine />
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
            target="_blank"
            rel="noreferrer"
          >
            <RiMailLine />
            Contact
          </a>
        </div>
        <div>
          <a
            href="#root"
            rel="noreferrer"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <RiArrowUpLine />
            Top of Page
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

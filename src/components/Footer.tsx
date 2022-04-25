import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
} from 'react-icons/ri'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-center mt-5 mb-14 text-4xl space-x-5">
        <NavLink to="/" className="navbar-link">
          <RiHome2Line />
        </NavLink>
        <NavLink to="/resume" className="navbar-link">
          <RiQuillPenLine />
        </NavLink>
        <NavLink to="/portfolio" className="navbar-link">
          <RiLayoutTop2Line />
        </NavLink>
        <a
          href="https://github.com/moquette/"
          target="_blank"
          className="navbar-link"
          rel="noreferrer"
        >
          <RiGithubLine />
        </a>
        <a
          href="https://www.linkedin.com/in/jmoquette/"
          target="_blank"
          className="navbar-link"
          rel="noreferrer"
        >
          <RiLinkedinLine />
        </a>
        <a
          href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
          target="_blank"
          className="navbar-link"
          rel="noreferrer"
        >
          <RiMailLine />
        </a>
      </div>
      <h6>Simple-Shell</h6>
      <p className="text-sm text-center pt-0 pb-10">
        <span className="text-gray-400">
          Copyright &copy;{new Date().getFullYear()} Joaquin A. Moquette
          <br />
          All Rights Reserved.
        </span>
      </p>
    </footer>
  )
}

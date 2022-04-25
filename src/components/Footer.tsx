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
      <div className="flex flex-row items-center justify-center mt-5 mb-14 text-4xl space-x-5 text-gray-400">
        <NavLink to="/" className="navbar-link hover:text-black">
          <RiHome2Line />
        </NavLink>
        <NavLink
          to="/resume"
          className="navbar-link hover:text-black transition ease-in-out duration-150"
        >
          <RiQuillPenLine />
        </NavLink>
        <NavLink
          to="/portfolio"
          className="navbar-link hover:text-black transition ease-in-out duration-150"
        >
          <RiLayoutTop2Line />
        </NavLink>
        <a
          href="https://github.com/moquette/"
          target="_blank"
          className="navbar-link hover:text-black transition ease-in-out duration-150"
          rel="noreferrer"
        >
          <RiGithubLine />
        </a>
        <a
          href="https://www.linkedin.com/in/jmoquette/"
          target="_blank"
          className="navbar-link hover:text-black transition ease-in-out duration-150"
          rel="noreferrer"
        >
          <RiLinkedinLine />
        </a>
        <a
          href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
          target="_blank"
          className="navbar-link hover:text-black transition ease-in-out duration-150"
          rel="noreferrer"
        >
          <RiMailLine />
        </a>
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

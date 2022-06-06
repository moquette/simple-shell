import React from 'react'
import {Button} from '@/core'
import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
} from 'react-icons/ri'

export const Footer = () => {
  return (
    <footer className="pb-5 pt-0 text-xs text-gray-400">
      <div className="container mx-auto flex max-w-sm flex-wrap  justify-center px-5 text-center text-gray-400 md:px-10">
        <Button to="/" className="mb-10 w-1/3">
          <RiHome2Line className="w-full text-3xl" />
          Home
        </Button>
        <Button to="/resume" className="mb-10 w-1/3">
          <RiQuillPenLine className="w-full text-3xl" />
          Resume
        </Button>
        <Button to="/portfolio" className="mb-10 w-1/3">
          <RiLayoutTop2Line className="w-full text-3xl" />
          Portfolio
        </Button>
        <Button href="https://github.com/moquette/" className="mb-10 w-1/3">
          <RiGithubLine className="w-full text-3xl" />
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/jmoquette/"
          className="mb-10 w-1/3"
        >
          <RiLinkedinLine className="w-full text-3xl" />
          LinkedIn
        </Button>
        <Button to="/contact" className="mb-10 w-1/3">
          <RiMailLine className="w-full text-3xl" />
          Contact
        </Button>
      </div>
      <p className="text-center text-xs">
        &copy;
        {new Date().getFullYear()}.{' '}
        <a href="https://github.com/moquette/" target="_blank" rel="noreferrer">
          Simple Shell
        </a>
      </p>
    </footer>
  )
}

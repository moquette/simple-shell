import React from 'react'
import Link from '@/components/AppLink'

import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri'

export default function IconBar(props) {
  return (
    <ul className="flex content-center justify-center space-x-4 text-2xl md:hidden">
      <li>
        <Link internal="/resume">
          <RiQuillPenLine className="inline-block" />
        </Link>
      </li>
      <li>
        <Link internal="/portfolio">
          <RiLayoutTop2Line className="inline-block" />
        </Link>
      </li>
      <li>
        <Link internal="/contact">
          <RiMailLine className="inline-block" />
        </Link>
      </li>
      <li hidden>
        <Link external="https://github.com/moquette/">
          <RiGithubLine />
        </Link>
      </li>
      <li hidden>
        <Link external="https://www.linkedin.com/in/jmoquette/">
          <RiLinkedinLine />
        </Link>
      </li>
    </ul>
  )
}

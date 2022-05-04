import React from 'react'
import {NavLink} from 'react-router-dom'
import {RiQuillPenLine, RiLayoutTop2Line, RiMailLine} from 'react-icons/ri'

export const IconBar = () => {
  return (
    <ul className="flex content-center justify-center space-x-5 text-3xl">
      <li>
        <NavLink to="/resume" className="hover:text-black">
          <RiQuillPenLine className="block mx-auto" />
          <p className="text-xs p-0">Resume</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="hover:text-black">
          <RiLayoutTop2Line className="block mx-auto" />
          <p className="text-xs p-0">Portfolio</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-black">
          <RiMailLine className="block mx-auto" />
          <p className="text-xs p-0">Contact</p>  
        </NavLink>
      </li>
    </ul>
  )
}

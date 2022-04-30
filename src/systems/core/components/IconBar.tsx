import React from 'react'
import {NavLink} from 'react-router-dom'
import {RiQuillPenLine, RiLayoutTop2Line, RiMailLine} from 'react-icons/ri'

export const IconBar = () => {
  return (
    <ul className="flex content-center justify-center space-x-4 text-2xl">
      <li>
        <NavLink to="/resume" className="hover:text-black">
          <RiQuillPenLine className="inline-block" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="hover:text-black">
          <RiLayoutTop2Line className="inline-block" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-black">
          <RiMailLine className="inline-block" />
        </NavLink>
      </li>
    </ul>
  )
}

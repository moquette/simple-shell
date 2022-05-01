import React, {FC} from 'react'
import {RiGithubLine} from 'react-icons/ri'
interface Props {
  title: string
  url?: string
  children: JSX.Element
}

export const ProjectCard: FC<Props> = ({title, url, children}) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md">
      <img
        className="rounded-t-lg"
        src="https://picsum.photos/920/613"
        alt=""
      />
      <div className="px-5 pt-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        {children}
        <p className="text-right">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="button full"
          >
            Code Repository
            <RiGithubLine className="ml-1 inline-block" />
          </a>
        </p>
      </div>
    </div>
  )
}

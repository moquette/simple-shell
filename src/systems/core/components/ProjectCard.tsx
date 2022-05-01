import React, {FC} from 'react'
import {RiGithubLine} from 'react-icons/ri'
interface Props {
  title: string
  repo?: string
  image?: string
  children: JSX.Element
}

export const ProjectCard: FC<Props> = ({title, repo, image, children}) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="px-5 pt-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        {children}
        <p className="text-right">
          <a
            href={repo}
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

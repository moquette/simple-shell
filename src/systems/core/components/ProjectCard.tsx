import React, {FC} from 'react'
interface Props {
  title: string
  repo?: string
  demo?: string
  image?: string
  children: JSX.Element
}

export const ProjectCard: FC<Props> = ({
  title,
  repo,
  demo,
  image,
  children,
}) => {
  return (
    <div className="grid content-between rounded-lg shadow-md">
      <div>
        <a href={demo} target="_blank" rel="noreferrer">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        {children}
      </div>
      <div className="px-5 ">
        <p className="grid grid-cols-2 gap-5 pt-2">
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="button text-center"
          >
            Code
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="button text-center"
          >
            Demo
          </a>
        </p>
      </div>
    </div>
  )
}

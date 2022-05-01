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
    <div className="grid-cols grid content-between rounded-lg shadow-md">
      <div>
        <div>
          <a href={demo} target="_blank" rel="noreferrer">
            <img className="rounded-t-lg" src={image} alt="splash" />
          </a>
        </div>
        <div className="flex-1 px-5 pt-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          {children}
        </div>
      </div>
      <div className="px-5 ">
        <div className="grid grid-cols-2 gap-5 pb-5 pt-2">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="button text-center"
            >
              Code
            </a>
          )}
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="button text-center"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

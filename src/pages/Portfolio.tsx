import React from 'react'
import {Layout} from '@/systems/core'
import {ProjectCard as Project} from '@/systems/core'

const portfolioItems = [
  {
    title: 'Base',
    repo: 'https://github.com/moquette/base',
    image: 'https://moquette.us/assets/base.791e9071.png',
    description: 'A wicked FAST React boilerplate.',
  },
  {
    title: 'Hello',
    repo: 'https://github.com/moquette/hello',
    image: 'https://moquette.us/assets/hello.88b39c5d.png',
    description:
      'Minimalistic cover page that makes a perfect GitHub user landing page, Single Page Application.',
  },
  {
    title: 'RBSX',
    repo: 'https://github.com/moquette/rbsx',
    image: 'https://moquette.us/assets/rbsx.675cb04a.png',
    description:
      'A wicked fast technology stack for your next website or application.',
  },
  {
    title: 'RTSX',
    repo: 'https://github.com/moquette/rtsx',
    image: 'https://moquette.us/assets/rtsx.d3da1b0b.png',
    description:
      'A wicked FAST Next.js stack for your next website or application.',
  },
]

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className="page portfolio pt-7">
        <h2>Portfolio</h2>
        <div className="grid gap-5 pt-2 md:grid-cols-2">
          {portfolioItems.map(({title, repo, image, description}) => {
            return (
              <Project title={title} image={image} repo={repo} key={title}>
                <p>{description}</p>
              </Project>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

import React from 'react'
import {Layout} from '@/core'
import {ProjectCard as Project} from '@/core'

const portfolioItems = [
  {
    title: 'Base',
    repo: 'https://github.com/moquette/base',
    demo: 'https://base.moquette.us',
    image: 'base.png',
    description: 'A wicked FAST React boilerplate.',
  },
  {
    title: 'Hello',
    repo: 'https://github.com/moquette/hello',
    demo: 'https://hello.moquette.us',
    image: 'hello.png',
    description:
      'Minimalistic cover page that makes a perfect GitHub user landing page, Single Page Application.',
  },
  {
    title: 'RBSX',
    repo: 'https://github.com/moquette/rbsx',
    demo: 'https://rbsx.moquette.us',
    image: 'rbsx.png',
    description:
      'A wicked fast technology stack for your next website or application.',
  },
  {
    title: 'RTSX',
    repo: 'https://github.com/moquette/rtsx',
    demo: 'https://rtsx.moquette.us',
    image: 'rtsx.png',
    description:
      'A wicked FAST Next.js stack for your next website or application.',
  },
  {
    title: 'Backpack',
    repo: 'https://github.com/moquette/backpack',
    demo: 'https://backpack.moquette.us',
    image: 'backpack.png',
    description: 'A production ready webpack 5 boilerplate.',
  },
  {
    title: 'Pull Up Plate',
    demo: 'https://pullupplate.com',
    image: 'pullupplate.png',
    description: 'Northern sacramento comfort food.',
  },
  {
    title: 'AppKit',
    demo: 'https://appkit.moquette.us/',
    image: 'appkit.png',
    description: 'Mobile UI kit.',
  },
]

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className="page portfolio min-h-screen pt-7">
        <h2>Portfolio</h2>
        <div className="grid gap-5 pt-2 md:grid-cols-2">
          {portfolioItems.map(({title, repo, demo, image, description}) => {
            return (
              <Project
                title={title}
                image={`/images/portfolio/${image}`}
                repo={repo}
                demo={demo}
                key={title}
              >
                <p>{description}</p>
              </Project>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

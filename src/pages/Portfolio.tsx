import {Layout} from '@/core'
import {ProjectCard as Project} from '@/core'
import React from 'react'

const portfolioItems = [
  {
    title: 'Project 1',
    repo: 'https://github.com/moquette/',
    demo: 'https://github.com/moquette/',
    image: 'base.png',
    description:
      'Lorem ipsum dolor sit amet, ea aeque ubique nec, qui populo oporteat et, mea id idque minim consectetuer. Ad nibh iracundia ius, ei sumo causae habemus has.',
  },
  {
    title: 'Project 2',
    repo: 'https://github.com/moquette/',
    demo: 'https://github.com/moquette/',
    image: 'hello.png',
    description:
      'Lorem ipsum dolor sit amet, ea aeque ubique nec, qui populo oporteat et, mea id idque minim consectetuer. Ad nibh iracundia ius, ei sumo causae habemus has.',
  },
  {
    title: 'Project 3',
    repo: 'https://github.com/moquette/',
    demo: 'https://github.com/moquette/',
    image: 'rbsx.png',
    description:
      'Lorem ipsum dolor sit amet, ea aeque ubique nec, qui populo oporteat et, mea id idque minim consectetuer. Ad nibh iracundia ius, ei sumo causae habemus has.',
  },
  {
    title: 'Project 4',
    repo: 'https://github.com/moquette/',
    demo: 'https://github.com/moquette/',
    image: 'rtsx.png',
    description:
      'Lorem ipsum dolor sit amet, ea aeque ubique nec, qui populo oporteat et, mea id idque minim consectetuer. Ad nibh iracundia ius, ei sumo causae habemus has.',
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
                image={require(`../assets/images/portfolio/${image}`)}
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

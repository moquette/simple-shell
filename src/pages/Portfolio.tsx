import React from 'react'
import {Layout} from '@/systems/core'
import {ProjectCard as Project} from '@/systems/core'

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className="page portfolio pt-7">
        <h2>Portfolio</h2>
        <div className="grid gap-5 pt-2 md:grid-cols-2">
          <Project title="Demo 1" url="#">
            <p>
              Morbi tristique senectus et netus et malesuada. Vel orci porta non
              pulvinar neque.
            </p>
          </Project>
          <Project title="Demo 2">
            <p>
              Morbi tristique senectus et netus et malesuada. Vel orci porta non
              pulvinar neque.
            </p>
          </Project>
          <Project title="Demo 3">
            <p>
              Morbi tristique senectus et netus et malesuada. Vel orci porta non
              pulvinar neque.
            </p>
          </Project>
          <Project title="Demo 4">
            <p>
              Morbi tristique senectus et netus et malesuada. Vel orci porta non
              pulvinar neque.
            </p>
          </Project>
        </div>
      </div>
    </Layout>
  )
}

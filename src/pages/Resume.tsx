import React from 'react'
import {Layout} from '@/core'

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="page resume min-h-screen pt-7">
        <h2>Resume</h2>
        <div>
          <h3>Joaquin A. Moquette</h3>
          <p className="pb-10 text-2xl font-thin text-black">
            Entrepreneurial self-starter with extraordinary problem-solving
            skills. Enjoys creating powerful applications, rich user experiences
            and solving complex design problems with dead-simple code.
          </p>
        </div>
        <div>
          <h3>Experience</h3>
          <div className="mb-10">
            <div className="flex justify-between">
              <div>
                <p className="p-0 font-black text-black">
                  Principal Developer / Designer
                </p>
                <p>Dovergence</p>
              </div>
              <p className="whitespace-nowrap·text-right">2017 to Present</p>
            </div>

            <p>
              Principal application developer/designer of cloud-based
              applications and backend development, implementation of automated
              processes, QA testing, data maintenance and migration of
              applications, APIs and integration of third-party open-source
              solutions and services.
            </p>
            <p>
              Meet with the clients and stakeholders to understand requirements,
              discuss solutions, and provide detailed progress updates.
              Facilitate the uptake of client solutions with training of tools,
              techniques, and suggestions.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex justify-between">
              <div>
                <p className="p-0 font-black text-black">
                  Principal UX Developer
                </p>
                <p>Oracle, Inc</p>
              </div>
              <p className="text-right">2004 to 2017</p>
            </div>
            <p>
              Managed, evaluated, and created solutions for consumer and
              enterprise web applications. This included the iterative design of
              mockups and functional prototypes for both end-user and technical
              evaluation, the evaluation and testing of new architectures, web
              and cloud technologies, features, and services.
            </p>
            <p>
              Created, designed, and enhanced publishing platforms and tools for
              rapid development and delivery of content. Contributed, reviewed,
              authored, and communicated pattern and coding standards and
              guidelines. Was the &apos;Go to&apos; person for insight and
              knowledge on tools and techniques within the organization,
              including mentoring junior employees and services.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex justify-between">
              <div>
                <p className="p-0 font-black text-black">Sr. Web Developer</p>
                <p>McAfee, Inc</p>
              </div>
              <p>2002 to 2004</p>
            </div>
            <p>
              Supported the design and implementation of the consumer-facing
              McAfee.com and business intranet portals. This included the
              analysis of corporate architecture needs and design creation and
              implementation.
            </p>
            <p>
              Designed a web interface for &apos;Virus Center,&apos; an external
              application that allowed consumers to look up and track viruses,
              origins, and solutions. Created user experience design solutions
              for e-commerce project managers and data mining specialists to
              increase conversion rates, including updates, upgrades, and
              overall maintenance of the website.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex justify-between">
              <div>
                <p className="p-0 font-black text-black">
                  Developer / UI Designer
                </p>
                <p>Siemens</p>
              </div>
              <p>1996 to 2002</p>
            </div>
            <p>
              Developer, designer and support member of a multimillion
              enterprise call center software acquisition.
            </p>
          </div>
        </div>
        <div>
          <h3>Skills</h3>
          <ul className="flow-root pb-5">
            <li className="pill">Apache</li>
            <li className="pill">API</li>
            <li className="pill">AWS</li>
            <li className="pill">Bootstrap</li>
            <li className="pill">Cloudflare</li>
            <li className="pill">CSS</li>
            <li className="pill">Design Systems</li>
            <li className="pill">ES6/7</li>
            <li className="pill">Express</li>
            <li className="pill">Git</li>
            <li className="pill">GitHub Pages</li>
            <li className="pill">Grunt</li>
            <li className="pill">Gulp</li>
            <li className="pill">HTML 5</li>
            <li className="pill">jQuery</li>
            <li className="pill">Netlify</li>
            <li className="pill">NextJS</li>
            <li className="pill">PHP</li>
            <li className="pill">React</li>
            <li className="pill">Redux</li>
            <li className="pill">REST</li>
            <li className="pill">SASS</li>
            <li className="pill">Snowpack</li>
            <li className="pill">Stripe</li>
            <li className="pill">Styled Components</li>
            <li className="pill">Tailwind</li>
            <li className="pill">Tooling</li>
            <li className="pill">Vercel</li>
            <li className="pill">Vite</li>
            <li className="pill">Webpack</li>
            <li className="pill">Wordpress</li>
            <li className="pill">XML</li>
          </ul>
        </div>
        <div>
          <h3>Education</h3>
          <div className="grid md:grid-cols-2">
            <div>
              <p>
                Harbor College
                <br />
                Programming / Business Administration
                <br />
                Los Angeles, CA / 1996
              </p>
            </div>
            <div>
              <p>
                Hawthorne HS
                <br />
                Information Technology
                <br />
                Hawthorne, CA / 1986
              </p>
            </div>
          </div>
        </div>
        <div className="hidden">
          <p>
            <a
              href="https://docs.google.com/document/d/1pSviiXAwTSFYCvvsoMeR4P2lOY5Ycmy9KmkQrD0wftc/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

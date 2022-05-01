import React, {useEffect, useState} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {ScrollToTop} from '@/systems/core'
import {ScrollToTopButton} from '@/systems/core'
import PageNotFound from '@/pages/PageNotFound'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'
import {Footer} from '@/systems/core'
import '@/styles/app.scss'

export const App = () => {
  const location = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  setTimeout(() => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) + 200 >=
      document.body.offsetHeight
    ) {
      // Trigger the animation
      document.querySelector('main').classList.add('end-of-page-animation')
    } else {
      document.querySelector('main').classList.remove('end-of-page-animation')
    }
  }, 0)

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <ScrollToTop>
          <main>
            <div className="container">
              <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <div className="mt-2 mb-3 text-center">
              <ScrollToTopButton />
            </div>
          </main>
          <Footer />
        </ScrollToTop>
      </CSSTransition>
    </TransitionGroup>
  )
}

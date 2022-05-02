import React, {useEffect, useState} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {ScrollToTop} from '@/core'
import {ScrollToTopButton} from '@/core'
import PageNotFound from '@/pages/PageNotFound'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'
import {Footer} from '@/core'

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
          <main className="bg-white shadow-2xl duration-500 ease-in-out">
            <div className="container mx-auto max-w-screen-lg px-5 md:px-10">
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

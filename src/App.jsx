import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const LazyHome = React.lazy(() => import('./components/Home'))
const LazyNavbar = React.lazy(() => import('./components/common/Navbar'))
const LazyAbout = React.lazy(() => import('./components/common/About'))
const LazyConnect = React.lazy(() => import('./components/common/Connect'))
const LazyContact = React.lazy(() => import('./components/common/Contact'))
const LazyServices = React.lazy(() => import('./components/Services'))
const LazyService1 = React.lazy(() => import('./components/Services/code-translator'))
const LazyService2 = React.lazy(() => import('./components/Services/error-debugger'))
const LazyService3 = React.lazy(() => import('./components/Services/grammar-improver'))
const LazyService4 = React.lazy(() => import('./components/Services/text-translator'))
const LazyService5 = React.lazy(() => import('./components/Services/story-generator'))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LazyNavbar />
        <Routes>
          <Route path='home' element={<React.Suspense fallback="Loading....."><LazyHome /></React.Suspense>} />
          <Route path='/' element={<React.Suspense fallback="Loading....."><LazyHome /></React.Suspense>} />
          <Route path='about' element={<React.Suspense fallback="Loading....."><LazyAbout /></React.Suspense>} />
          <Route path='services' element={<React.Suspense fallback="Loading....."><LazyServices /></React.Suspense>} />
          <Route path='services/code-translator' element={<React.Suspense fallback="Loading....."><LazyService1 /></React.Suspense>} />
          <Route path='services/error-debugger' element={<React.Suspense fallback="Loading....."><LazyService2 /></React.Suspense>} />
          <Route path='services/grammar-improver' element={<React.Suspense fallback="Loading....."><LazyService3 /></React.Suspense>} />
          <Route path='services/text-translator' element={<React.Suspense fallback="Loading....."><LazyService4 /></React.Suspense>} />
          <Route path='services/story-generator' element={<React.Suspense fallback="Loading....."><LazyService5 /></React.Suspense>} />
          <Route path='contact' element={<React.Suspense fallback="Loading....."><LazyContact /></React.Suspense>} />
          {/* <Route path='connect' element={<React.Suspense fallback="Loading....."></React.Suspense>} /> */}
        </Routes>
        <LazyConnect />
      </BrowserRouter>
    </>
  )
}

export default App
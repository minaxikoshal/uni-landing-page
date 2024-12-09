import { useState, useEffect } from 'react'
import { Navigation } from '../components/navigation'
import { Header } from '../components/header'
import { About } from '../components/about'
import { Features } from '../components/features'
import { Testimonials } from '../components/testimonials'
import { Gallery } from '../components/gallery'
import { Contact } from '../components/contact'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'
import './style.css'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Testimonials data={landingPageData.Testimonials} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}
export default Home

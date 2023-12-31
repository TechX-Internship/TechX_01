import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import MainBanner from './components/home'
import About from './components/about'
import Service from './components/service'
import Gallery from './components/gallery'
import {Rubik} from 'next/font/google'
import Demo from '../app/components/demo'
import Blog from '../app/components/blog'
import Facility from '../app/components/facility'
import Team from '../app/components/team'
import Team2 from '../app/components/team2'
import Faq from '../app/components/faq'
import Media from '../app/components//media'
import Contact from '../app/components/contact'


const rubik = Rubik ({
    subsets:['latin'],
    weight:'400',
    variable:'--font--'
})



export default function Home() {
  return (
    <> 
      <MainBanner/>
      <About/>
      <Service/>
      <Gallery/>
      <Blog/>
      <Facility/>
      <Team/>
      <Team2/>
      <Media/>
      <Faq/>
      <Contact/>
    </>

  )
}

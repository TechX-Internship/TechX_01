import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import MainBanner from './components/home'
import About from './components/about'
import Service from './components/service'
import Gallery from './components/gallery'



export default function Home() {
  return (
    <> 
      <MainBanner/>
      <About/>
      <Service/>
      <Gallery/>
    </>

  )
}

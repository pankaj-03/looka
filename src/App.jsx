import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Strip from './components/Strip'
import Carousal from './components/Swiper'

function App() {
 

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Carousal/>
      <Strip/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App

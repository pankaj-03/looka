//images
import image from "../assets/review_images.svg"

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="md:text-5xl text-4xl font-semibold text-center">Design your own beautiful brand</h1>
        <p className="text-xl  text-slate-500 text-center">Use Looka's AI-powered platform to design a logo and brand you love.</p>
        <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-4">
          <div className="md:pl-6 md:pr-48 sm:px-24 px-18 py-5  text-gray-500 text-nowrap text-base rounded-lg bg-slate-100">
            Enter your company name
          </div>
          <div className="bg-indigo-600 transition-colors duration-500 ease-in-out hover:bg-blue-700 cursor-pointer text-white text-nowrap rounded-lg md:px-5 md:py-5 py-5 sm:px-24 px-18 text-center">
            Get Started
          </div>
        </div>
        <div>
          <img src={image} alt="image" className="h-7 w-auto"></img>
        </div>
      </div>


    </section>
  )
}

export default HeroSection

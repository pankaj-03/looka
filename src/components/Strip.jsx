//images
import crunch from "../assets/techCrunch.png"
import forbes from "../assets/forbes.png"
import globe from "../assets/globe-and-mail.png"
import huffpost from "../assets/huffpost.png"
import google from "../assets/google.png"

const images = [
  crunch,
  google,
  huffpost,
  forbes,
  globe,
]

const Strip = () => {
  return (
    <section className="bg-gray-50 p-6 invisible md:visible">
      <div className="grid grid-cols-7">
        <div className="col-span-1"></div>
        <ul className="col-span-5 grid grid-cols-5 items-center">
          {images.map((image, index) => {
            return (<li key={index} className="col-span-1">
              <img src={image} alt={index} className={`${index % 2 ? "xl:h-14 xl:w-32 lg:h-10 lg:w-26 h-8 w-20" : "xl:h-10 xl:w-32 lg:h-8 lg:w-26 h-8 w-20"} object-contain`} ></img>
            </li>)
          })}
        </ul>
        <div className="col-span-1"></div>
      </div>
    </section>
  )
}

export default Strip

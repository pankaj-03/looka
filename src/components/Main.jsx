//images
import image1 from "../assets/section1.jpg";
import image2 from "../assets/section2.jpg";
import image3 from "../assets/section3.jpg";

const Main = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center">

                {/* MAIN SECTION 1 */}

                <div className="w-full flex justify-center my-12">
                    <h2 className="md:text-5xl text-3xl font-semibold max-w-11/12 lg:max-w-1/2 text-center">The easiest way to design and launch your new business</h2>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 lg:p-4 p-2">
                    <div className="col-span-1  flex md:justify-end justify-center">
                        <img src={image1} alt="image" className="h-auto w-10/12 object-contain" />
                    </div>
                    <div className="col-span-1 flex flex-col items-start  justify-center lg:px-16 md:px-12 md:py-16 px-2 py-4">
                        <h3 className="lg:text-4xl text-3xl font-semibold"><span className="text-indigo-600 mr-1">01.</span> Make a logo in minutes</h3>
                        <p className="text-lg md:text-base max-w-md md:max-w-xl lg:max-w-md p-6 md:p-2 lg:p-6 text-gray-500">Forget looking generic! Looka’s software is powered by AI to create a logo that matches your vision — no design skills required. Generate endless options, and tweak designs to get exactly what you want.</p>
                        <button className="bg-indigo-600 transition-colors duration-500 ease-in-out hover:bg-blue-700 cursor-pointer px-5 py-3 md:py-2 md:px-3 lg:px-5 lg:py-3 text-white rounded-md lg:ml-6 md:ml-3 ml-6">Get Started</button>
                    </div>

                </div>

                <div >

                </div>

                {/* MAIN SECTION 2 */}

                <div className="grid md:grid-cols-2 grid-cols-1 lg:p-4  p-2">
                    <div className="order-2 md:order-none col-span-1 flex flex-col   items-start justify-center  xl:ml-32  lg:px-16 xl:px-8 md:px-12 md:py-16 px-2 py-4">
                        <h3 className="lg:text-4xl text-3xl  font-semibold"><span className="text-indigo-600 mr-1">02.</span>Bring your brand to life </h3>
                        <p className="text-lg md:text-base max-w-md md:max-w-xl lg:max-w-md  p-6 md:p-2 lg:p-4 text-gray-500">With your logo design finalized, it’s time to start building your brand identity. Looka’s Brand Kit uses your logo, colors, and fonts to instantly create hundreds of branded marketing materials—all in one spot.</p>
                        <button className="bg-indigo-600 transition-colors duration-500 ease-in-out hover:bg-blue-700 cursor-pointer px-5 py-3 md:py-2 md:px-3 lg:px-5 lg:py-3 text-white rounded-md lg:ml-6 md:ml-3 ml-6">Get Started</button>
                    </div>

                    <div className="order-1 md:order-none col-span-1  flex md:justify-start justify-center">
                        <img src={image2} alt="image" className="h-auto w-10/12 object-contain" />
                    </div>

                </div>

                <div >

                </div>

                {/* MAIN SECTION 3*/}



                <div className="grid md:grid-cols-2 grid-cols-1 lg:p-4 p-2">
                    <div className="col-span-1  flex md:justify-end justify-center">
                        <img src={image3} alt="image" className="h-auto w-10/12 object-contain" />
                    </div>
                    <div className="col-span-1 flex flex-col items-start  justify-center lg:px-16 md:px-12 md:py-16 px-2 py-4">
                        <h3 className="lg:text-4xl text-3xl  font-semibold"><span className="text-indigo-600 mr-1">03.</span>Market your business</h3>
                        <p className="text-lg md:text-base max-w-md md:max-w-xl lg:max-w-md p-6 md:p-2 lg:p-6 text-gray-500">Choose from 300+ templates made to match your brand identity and industry. Customize the design of your brand’s business cards, social profiles, email signatures, and more in the Brand Kit’s easy-to-use editor.</p>
                        <button className="bg-indigo-600 transition-colors duration-500 ease-in-out hover:bg-blue-700 cursor-pointer px-5 py-3 md:py-2 md:px-3 lg:px-5 lg:py-3 text-white rounded-md lg:ml-6 md:ml-3 ml-6">Get Started</button>
                    </div>

                </div>

                <div >

                </div>

            </div>
        </section>
    )
}

export default Main

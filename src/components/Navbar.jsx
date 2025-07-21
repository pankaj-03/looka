import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {

  const navFields = [
    {
      id: 1,
      label: "Logo Maker",
      link: "#"
    },

    {
      id: 2,
      label: "Brand Kit",
      link: "#"
    },

    {
      id: 3,
      label: "How It Works",
      link: "#"
    },

    {
      id: 4,
      label: "Reviews",
      link: "#"
    },

    {
      id: 5,
      label: "Logo Ideas",
      link: "#"
    },

    {
      id: 6,
      label: "Blog",
      link: "#"
    }
  ]

  const [showMenu, setShowMenu] = useState(false);

  function handleButtonToggle() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="h-20 w-full shadow-sm sticky top-0 z-[100]  lg:mb-8  bg-white px-2">
      <div className="container max-w-full mx-auto  grid lg:grid-cols-4 grid-cols-2 md:items-center p-4">
        <div className="col-span-1   flex justify-start ">
          <img src={logo} alt="LOGO" className="w-[90px] h-8 cursor-pointer"></img>
        </div>

        <div className="lg:hidden flex justify-end col-span-1 cursor-pointer">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu className="h-8 w-8" />
          </button>
        </div>
    

        <nav className={`${showMenu ? "flex" : "hidden"} lg:flex col-span-3   lg:static absolute  lg:top-0  top-20 left-0 w-full lg:col-span-3 flex lg:flex-row flex-col lg:items-center px-2 lg:px-0   lg:mt-0 lg:bg-transparent lg:shadow-none bg-white justify-between `}>
          <ol className="flex lg:flex-row flex-col lg:justify-center lg:ml-24   items-start lg:gap-6 gap-1">
            {navFields.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link} className="text-lg lg:text-sm xl:text-base  font-medium text-slate-950">{item.label}</a>
                </li>
              )
            })}
          </ol>

          <div className="flex lg:flex-row flex-col-reverse   justify-between gap-6 items-center">
            <div>
              <p className="text-lg md:text-sm lg:text-base font-medium text-nowrap text-slate-950 cursor-pointer">Log in</p>
            </div>

            <div className="w-full flex justify-center">
              <button className="bg-indigo-600 rounded-sm md:px-5 px-16 py-2 lg:py-3 transition-colors duration-500 ease-in-out hover:bg-blue-700 cursor-pointer">
                <p className="text-lg md:text-base text-nowrap font-semibold text-white "> Sign up</p>
              </button>
            </div>

          </div>



        </nav>

        {/* <div className="flex col-span-1 justify-end items-center space-x-6 mr-4">
                 <div>
                    <p className="text-base font-medium text-slate-950 ">Log in </p>
                 </div>
                  
                  <div>
                       <button className="bg-indigo-600 rounded-sm px-5 py-3">
                          <p className="text-base font-semibold text-white"> Sign up</p>
                      </button>
                  </div>
                 
            </div> */}

        {/* <div className="lg:hidden flex justify-end col-span-1">
              <button onClick={handleButtonToggle}>
                    <GiHamburgerMenu  className="h-8 w-8"/>
              </button>
            </div> */}


      </div>
    </header>
  )
}

export default Navbar

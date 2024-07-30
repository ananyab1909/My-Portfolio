import React from "react";


const Navbar = () => {
    // const [nav,setNav] = useState(false)
    // const handleNav = () => {
    //     setNav(!nav)
    // }
  return (
    <div className = 'flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <ul className="flex flex-row flex-wrap justify-center">
            <li className="p-2">Home</li>
            <li className="p-2">About</li>
            <li className="p-2">Skills</li>
            <li className="p-2">Socials</li>
            <li className="p-2">Contact</li>
        </ul>
        {/* <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
            <AiOutlineMenu size = {20} />
        </div> */}
        {/* <div className={'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">REACT.</h1>
            <ul className="pt-24 uppercase">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div> */}
    </div>
  );
};

export default Navbar;


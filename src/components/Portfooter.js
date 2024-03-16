import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram,FaMapMarkerAlt ,FaTelegram } from "react-icons/fa";
import { FaLinkedin ,FaGithub} from "react-icons/fa";


function Portfooter() {
  return (
    <div>



        <div className="bg-zinc-900">
            <div className=" text-white flex justify-evenly">
                <div className="">
                    {/* <h1 className="text-xl sm:text-6xl">Hello, World!</h1> */}
                    <h6 className="text-2xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Address</h6>
                    <p className=" sm:text-2xl">
                        Adama, Ethiopia college,
                        <br />
                        around college University
                        <br />
                       <p className='flex justify-normal'> office No __ 
                        <FaMapMarkerAlt className="w-8 h-8 t" />
                    </p></p>
                   

                </div>
                <div className="">
                    <h4 className="text -xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Quick Links</h4>
                    <div className='text-xl '>
                    <a href="#">Home</a><br />
                    <a href="#">About</a><br />
                    <a href="#">projects</a><br/>
                    <a href="#">Contact</a><br />
                    </div>
                </div>
                <div className="Contact">
                    <h4 className="text-2xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Contact</h4>
                    <p className='text-xl'>
                        connect with entrepreneurs,
                        <br />
                        build your network, <br />
                        make great business.
                    </p>
                    <div className="flex justify-evenly py-8">
                        <FaLinkedin className="w-6 h-6 text-blue-600" />
                        <FaFacebook className="w-6 h-6 text-blue-500" />
                        <FaInstagram className="w-6 h-6 text-white" />
                        <FaGithub className="w-6 h-6 text-fuchsia-700" />
                        <FaTelegram className="w-6 h-6 text-blue-500" />
                        
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-300 my-4"></div>
            <div className="flex justify-center text-white py-10 text-xl font-fontawesome">
                <p>&copy; {new Date().getFullYear()}  Reactroot.</p>
            </div>

        </div>


        
    </div>
  )
}

export default Portfooter
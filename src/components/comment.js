import React from "react";
import Profile from '../image/Samplepro.PNG'
import Web from "../image/1000_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
import Appdeve from '../image/deve.PNG'
import Network from "../image/MACHINE.png"
function comment() {
  return (
    <div className="">
      <div className=" ">
        <div className=" text-yellow-50 bg-blue-950  ">

          <div className=" sm:flex justify-normal px-10 ">
            <div className="flex justify-normal">
              <div className="p-10 hover:scale-110 ">

                <div className="h-72 w-48 bg-slate-300 rounded-2xl text-fuchsia-700">
                  <img className="w-48 h-48  p-5  rounded-full" src={Profile} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12">  Name <p className="text-gray-800 pl-12">Role</p></span> </div>
                </div>
              </div>
              <div className="p-10 hover:scale-110 ">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700 text-xl ">
                  <img className="w-48 h-48 rounded-t-xl" src={Network} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12"> Network
                      <p className="pl-12">installation</p></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-normal">
              <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Appdeve} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> Application
                      <p className="pl-12"> development </p>
                    </span></div>
                </div>
              </div>

              <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Web} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> website
                      <p className="pl-12">development</p>
                    </span></div></div>
              </div>
            </div>
          </div>
          
          <div className="text-5xl font-serif text-fuchsia-200 flex pb-12 justify-center
          
          hover:text-sky-700 hover:scale-100">Our Service</div>
        </div>
        <div className=" bg-blue-950  flex justify-normal">
            <div className="">

            <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Web} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> website
                      <p className="pl-12">development</p>
                    </span></div></div>
              </div>

            

            </div>


            <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Web} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> website
                      <p className="pl-12">development</p>
                    </span></div></div>
              </div>


              <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Web} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> website
                      <p className="pl-12">development</p>
                    </span></div></div>
              </div>

              <div className="p-10 hover:scale-110">
                <div className="h-72 w-48 bg-slate-300 rounded-xl text-fuchsia-700">
                  <img className="w-48 h-48 rounded-t-xl" src={Web} />
                  <div className="pt-6 hover:text-blue-800">
                    <span className="pl-12 "> website
                      <p className="pl-12">development</p>
                    </span></div></div>
              </div>



          </div>
      </div>
    </div>
  );
}

export default comment;

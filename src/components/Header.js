import { Link } from "react-router-dom"
import Games from '../dsply/Games';
import Feed from '../dsply/Feed';
import Tournaments from '../dsply/Tournaments';
import Spaces from '../dsply/Spaces';
import Login from '../dsply/Login';
function Header() {
  return (
    <div>
    <div className="fixed top-0 right-0 left-0 flex justify-end list-none bg-slate-900 text-white text-xl px-10">
    
      <li className="px-10">About</li>
      <li className="px-10">Services</li>
      
      <li className="px-10">projects</li>
      <li className="px-10 text-yellow-300"> CONTACT</li>
     
     
    </div>
    </div>
  )
}

export default Header

import Link from "next/link"



export default function DashNav(){
  return (
    <nav className="flex w-40 bg-gray-200 py-20 p-4 h-screen w-10 text-center">
      <ul className="flex flex-col justify-around">
        <li className="">
        Logo
        </li>
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Home
          </Link>
        </li>
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Profile
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Notifcations 
          </Link>
        </li>
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
           Reports
          </Link>
        </li> 
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
           Add Project
          </Link>
        </li>
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
           Settings
          </Link>
        </li>
        <li className="">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
           Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
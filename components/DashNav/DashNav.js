
import Link from "next/link"

export default function DashNav(){
  return (
    <nav className="w-40 bg-gray-200">
      <ul className="flex flex-col h-screen w-10">
        <li className="p-4">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 w-full items-center justify-between py-4 px-8 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className='flex justify-between space-x-4"'>
        <Link href="/">
            <img src="/logo.png" alt="" className="h-8 w-8" />
        </Link>
        <Link href="/" className="flex justify-between space-x-4 text-white">
          LogicLogs
        </Link>
      </div>
      <ul className="flex justify-center space-x-4 py-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300 cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-between space-x-4">
        <Link href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            <button>Sign Up</button>
        </Link>
        <Link href="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            <button>Log In</button>
        </Link>
      </div>
    </nav>
  );
}

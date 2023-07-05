import Link from "next/link"


export default function DashboardPage() {
  return (
    <div className="flex">
      <nav className="w-64 bg-gray-200">
        <ul className="flex flex-col">
          <li className="p-4">
            <Link href="/">
              <p className="text-gray-800 hover:text-gray-600">Home</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/about">
              <a className="text-gray-800 hover:text-gray-600">About</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <a className="text-gray-800 hover:text-gray-600">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1">
        <h1>Dashboard</h1>
        <section className=""></section>
      </div>
    </div>
  );
}

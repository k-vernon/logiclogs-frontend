import Link from "next/link"


export default function DashboardPage() {
  return (
    <div className="flex">
      <nav className="w-64 bg-gray-200">
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
      <div className="flex-1">
        <section className="">
          <h1>Welcome user</h1>
        </section>
      </div>
    </div>
  );
}

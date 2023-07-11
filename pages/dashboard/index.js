import Link from "next/link"


export default function DashboardPage() {
  return (
    <div className="flex">
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
      <div className="flex-row p-12 w-screen h-screen bg-blue-200">
        <section className="bg-red-200 w-28 h-28">
          <h1>Welcome user</h1>
        </section>
        <section className="">
          <h1>Welcome user</h1>
        </section>
        <section className="">
          <h1>Welcome user</h1>
        </section>
      </div>
    </div>
  );
}

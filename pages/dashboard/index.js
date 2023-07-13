import Link from "next/link"
import DashNav from "@/components/DashNav/DashNav";
import { useState } from "react";

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Search logic
  };

  return (
    <div className="flex">
      <DashNav/>
      <section className="flex flex-col p-12 w-screen h-screen bg-blue-200">
        <section className="flex flex-row bg-white h-15 pl-12 py-10">
          <input
            className="border w-5/12"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white" onClick={handleSearch}>
          Search
          </button>
        </section>
        <section className="flex flex-row p-12 bg-purple-200">
          <div className="bg-red-200 w-28 h-28">
            <h1>Welcome user</h1>
          </div>
          <div className="bg-red-200 w-28 h-28">
            <h1>Welcome user</h1>
          </div>
          <div className="bg-red-200 w-28 h-28">
            <h1>Welcome user</h1>
          </div>
        </section>
        <section className="flex flex-row p-12 bg-yellow-200">
          <div className="bg-red-200 w-28 h-28">
           <h1>Welcome user</h1>
          </div>
          <div className="bg-red-200 w-28 h-28">
            <h1>Welcome user</h1>
          </div>
          <div className="bg-red-200 w-28 h-28">
            <h1>Welcome user</h1>
          </div>
        </section>
      </section>
    </div>
  )
  
}; 


export default DashboardPage
import Link from "next/link"
import DashNav from "@/components/DashNav/DashNav";


export default function DashboardPage() {
  return (
    <div className="flex">
      <DashNav/>
      <section className="flex flex-col p-12 w-screen h-screen bg-blue-200">
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
  );
}

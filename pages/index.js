import Navbar from "@/components/navbar/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="pt-24 pl-8">
        <h1 className="text-4xl font-bold mb-4">Easy way to get full control of your projects</h1>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam. Vestibulum varius pharetra enim a sagittis.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Get Started</button>
      </div>
      
    </div>
  )
}

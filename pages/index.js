import Navbar from "@/components/navbar/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section className="pt-28 pb-20 pl-8">
        <h2 className="text-3xl mb-2">LogicLogs</h2>
        <h1 className="text-4xl font-bold mb-4">An easy way to get full control of your projects</h1>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam. Vestibulum varius pharetra enim a sagittis.</p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">Get Started</button>
      </section>
      
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <p className="mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam."</p>
              <p className="font-bold">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam."</p>
              <p className="font-bold">- Jane Smith</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus elit, eget consequat quam."</p>
              <p className="font-bold">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

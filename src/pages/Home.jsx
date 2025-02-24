import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src="/landing.jpg" 
          alt="Company Banner" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to 3dprenneur
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Innovating the Future</h2>
        <p className="mt-4 text-lg text-gray-600">
          We provide cutting-edge solutions to revolutionize industries.
          Join us in building a smarter, more connected world.
        </p>
      </div>
      <Footer/>
    </Layout>
  );
}

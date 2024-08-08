import "animate.css";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <header className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          About Us
        </h1>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-1s">
          At KeyMasters, we specialize in delivering high-quality mechanical
          keyboards that blend performance with aesthetics. Our passion is to
          provide enthusiasts with the best typing experience possible.
        </p>
      </header>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Our mission is to enhance your typing experience through expertly
            crafted mechanical keyboards. We focus on precision, durability, and
            design to meet the needs of every keyboard enthusiast.
          </p>
          <h2 className="text-3xl font-semibold mb-8">Achievements</h2>
          <div className="flex justify-center space-x-10">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg">Keyboards Sold</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-lg">Custom Designs</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-center py-4">
        <p>&copy; 2024 KeyMasters. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

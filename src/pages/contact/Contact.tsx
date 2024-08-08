import "animate.css/animate.min.css";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <header className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Contact Us
        </h1>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-1s">
          We'd love to hear from you! Feel free to reach out with any questions
          or feedback.
        </p>
      </header>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
          <p className="text-lg mb-8">Email: support@mechanicalkeyboards.com</p>
          <p className="text-lg mb-8">Phone: +880 123 456 7890</p>
          <p className="text-lg mb-8">
            Address: 456 Mechanical Street, Dhaka, Bangladesh
          </p>

          <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Find Us Here</h2>
          <div className="relative w-full h-96 mb-8">
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0812633483807!2d90.40704441551144!3d23.810317684587256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72845085c3b%3A0x3e65a5f82e4a74fc!2sDhaka%20City%20Corporation!5e0!3m2!1sen!2sbd!4v1635185297364!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-center py-4">
        <p>&copy; 2024 Mechanical Keyboards. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://facebook.com/YourShopName"
            className="text-blue-300 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/YourShopName"
            className="text-blue-300 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company/YourShopName"
            className="text-blue-300 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;

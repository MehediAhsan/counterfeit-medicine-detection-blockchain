

const ContactUs = () => {
    return (
        <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Us Today</h2>
        <p className="text-lg text-white">
          For inquiries or more information about our services, reach out to us.
        </p>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <a
            href="mailto:contact@example.com"
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
    );
};

export default ContactUs;

const Home = () => {
    return (
        <div className=" min-h-screen">
      

      {/* Hero Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-3xl font-bold text-white">Detect Counterfeit Medicines</h2>
              <p className="mt-4 text-lg text-gray-200">
                Our advanced AI-powered system helps identify counterfeit medicines
                to ensure the safety of consumers and protect the pharmaceutical industry.
              </p>
              <button className="mt-6 bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                Get Started
              </button>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <img
                className="w-full h-auto rounded-3xl border-l-4 border-yellow-500"
                src="https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Counterfeit Medicine Detection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-14">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg text-center border border-r-8 border-yellow-500">
              <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m2-10a1 1 0 011-1h12a1 1 0 011 1v1H5V5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
              <p className="text-gray-700">
                Start by uploading an image of the medicine packaging or pills to be analyzed.
              </p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg text-center border border-r-8 border-yellow-500">
              <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-700">
                Our AI algorithms examine the image to detect signs of counterfeit elements.
              </p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg text-center border border-r-8 border-yellow-500">
              <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">View Results</h3>
              <p className="text-gray-700">
                Receive detailed results indicating whether the medicine is genuine or counterfeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <img
                className="w-full h-auto rounded-3xl border-r-4 border-yellow-500"
                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=940&q=80"
                alt="Benefits of Counterfeit Medicine Detection"
              />
            </div>
            <div>
              <ul className="list-disc list-inside text-gray-200 ">
                <li className="mb-4">Protects Consumers Health and Safety</li>
                <li className="mb-4">Preserves Brand Reputation</li>
                <li className="mb-4">Safeguards Pharmaceutical Supply Chain</li>
                <li className="mb-4">Compliance with Regulatory Standards</li>
                <li className="mb-4">Enhanced Trust and Confidence</li>
                <li>Reduces Financial Losses from Counterfeiting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us Today</h2>
          <p className="text-lg text-white">
            For inquiries or more information about our services, reach out to us.
          </p>
          <a
            href="mailto:contact@example.com"
            className="mt-6 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-sm font-medium">&copy; {new Date().getFullYear()} Counterfeit Medicine Detection. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
};

export default Home;
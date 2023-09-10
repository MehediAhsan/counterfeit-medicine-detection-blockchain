
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-sm font-medium">&copy; {new Date().getFullYear()} Counterfeit Medicine Detection. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
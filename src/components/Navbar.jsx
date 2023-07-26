import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className="flex flex-wrap place-items-center">
  <section className="relative mx-auto">
      
    <nav className="flex justify-between bg-gray-100 text-black w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        
        <ul className="hidden md:flex px-4 mx-auto font-bold font-heading space-x-12">
          <li><Link class="hover:text-yellow-500" to='/'>Home</Link></li>
          <li><Link class="hover:text-yellow-500" to='/manufacturer'>Manufacturer</Link></li>
          <li><Link class="hover:text-yellow-500" to='/aboutus'>About Us</Link></li>
        </ul>
        
      </div>
    </nav>
  </section>
</div>
    );
};

export default Navbar;
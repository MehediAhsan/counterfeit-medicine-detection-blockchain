import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div class="flex flex-wrap place-items-center">
  <section class="relative mx-auto">
      
    <nav class="flex justify-between bg-gray-100 text-black w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        
        <ul class="hidden md:flex px-4 mx-auto font-bold font-heading space-x-12">
          <li><Link class="hover:text-yellow-500" to='/'>Home</Link></li>
          <li><Link class="hover:text-yellow-500" to='/manufacturer'>Manufacturer</Link></li>
          <li><Link class="hover:text-yellow-500" to='/'>Contact Us</Link></li>
          <li><Link class="hover:text-yellow-500" to='/'>Catagory</Link></li>
        </ul>
        
      </div>
    </nav>
  </section>
</div>
    );
};

export default Navbar;
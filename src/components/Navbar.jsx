import React from 'react';

const Navbar = () => {
    return (
            <div class="flex flex-wrap place-items-center">
  <section class="relative mx-auto">
      
    <nav class="flex justify-between bg-gray-100 text-black w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        
        <ul class="hidden md:flex px-4 mx-auto font-bold font-heading space-x-12">
          <li><a class="hover:text-yellow-500" href="#">Home</a></li>
          <li><a class="hover:text-yellow-500" href="#">Collections</a></li>
          <li><a class="hover:text-yellow-500" href="#">Contact Us</a></li>
          <li><a class="hover:text-yellow-500" href="#">Catagory</a></li>
        </ul>
        
      </div>
    </nav>
  </section>
</div>
    );
};

export default Navbar;
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
        <div data-aos="zoom-in" data-aos-duration="1000" className='text-center text-yellow-500 py-20'>
            <h1 className='text-4xl font-bold uppercase shadow-2xl'>Counterfeit Medicine Detection</h1>
            <p className='text-white font-semibold pt-2'>Through Blockchain-Based</p>
        </div>
        <Navbar></Navbar>
        </>
    );
};

export default Header;
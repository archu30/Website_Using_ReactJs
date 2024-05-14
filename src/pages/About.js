// About.js

import React from 'react';
import AboutImg from '../assets/img/about.png';
import Expert from '../Components/Expert';

const About = () => {
  return (
    <>
    
    <div className='w-full py-[130px]' style={{ backgroundImage: `url(${AboutImg})` }}>
      <div className="max-w-[1240px] mx-auto py-16 px-4 justify-center text-center text-white">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className='px-[50px]'>
          Welcome to our about page! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam nec semper magna. Ut ac justo sed tortor tincidunt elementum at non felis.
        </p>
      </div>
    </div>
    < Expert/>
    </>
  );
};

export default About;

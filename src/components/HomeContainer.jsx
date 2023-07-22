import React from 'react';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';



const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>
        <div className='flex items-center gap-2 justify-start p-2'>
          <p></p>
          <div className='w-6 h-6 overflow-hidden'>

          </div>
        </div>
        <p className='md:-mt-30 text-[2.5rem] md:text-[3rem] font-bold tracking-wide text-headingColor'>
          Life is short, don't waste it in a
          <span className='text-red-700 text-[3rem] md:text-[3rem]'>
            &nbsp;queue.
          </span>
        </p>
        <p className='text-base text-textColor md:text-left md:w-[85%] tracking-wide'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste mollitia nobis debitis. Eos, voluptate dolorem ut enim consectetur, rem, accusantium molestias ipsam inventore repellendus dolores ad mollitia doloremque nemo!
        </p>
        <button type='button' className='bg-gradient-to-br from-red-600 to-red-700 w-full text-white px-4 py-2 md:mt-12 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order NOW!</button>
      </div>


      <div className='py-2 flex-1 flex relative'>
        <img
          src={HeroBg}
          className='md:ml-auto h-400 w-full top-100 lg:w-auto lg:h-600'
          alt="hero-bg" />

        <div className='w-full h-full py-8 absolute top-0 left-0 flex items-center justify-center gap-5 flex-wrap'>
          {heroData && heroData.map(n => (

            <div key={n.id}
              className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
              <img src={n.imageSrc}
                className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt='I1' />

              <p className='text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-3'>
                {n.name}
              </p>

              <p className='text-[12px] lg:text-sm text-lighttextGray my-1 lg:my-3'>
                {n.decp}
              </p>

              <p className='my-3 text-sm font-semibold text-headingColor'>
                <span className='text-red-600'>Rs. </span>
                {n.price}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer
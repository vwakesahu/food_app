import React, { useState } from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import { useEffect } from 'react';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {

   const [{ foodItems, cartShow }, dispatch] = useStateValue();
   const [scrollValue, setScrollValue] = useState(0);

   useEffect (() => {}, [scrollValue, cartShow])


  return (
     <div className='w-full h-auto flex flex-col items-center justify-center'>
        <HomeContainer />

        <section className='w-full my-6'>
         <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600 transition-all ease-in-out duration-100'>
               Our fresh & Healthy fruits
            </p>
            <div className='hidden md:flex gap-3 items-center'>
               <motion.div 
                  whileTap={{scale: 0.75}} 
                  className='w-8 h-8 rounded-lg bg-red-300 hover:bg-red-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                  onClick={() => setScrollValue(-200)}
                  >
                     <MdChevronLeft className='text-lg text-white' />
               </motion.div>

               <motion.div 
                  whileTap={{scale: 0.75}} 
                  className='w-8 h-8 rounded-lg bg-red-300 hover:bg-red-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                  onClick={() => setScrollValue(200)}
                  >
                     <MdChevronRight className='text-lg text-white' />
               </motion.div>
            </div>
         </div>
         <RowContainer 
            scrollValue={scrollValue}
            flag={true} 
            data = {foodItems?.filter((n) => n.category === 'fruits')} //flag == true for fruit section, flag == false for menu section
         /> 
        </section>

        <MenuContainer />

        {cartShow && (
         <CartContainer />
        )}
       
     </div>
    );
};

export default MainContainer;
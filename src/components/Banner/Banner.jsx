import React from 'react'
import { motion } from "framer-motion"

const Banner = ({isVisible}) => {
  return (
    <div className='w-full h-[80vh]' 
    style={{
        backgroundImage: "url(https://olvagroup.com/wp-content/uploads/2023/12/ovin-1536x1024-1-1024x683.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.4,  // Adjust the opacity value as needed
    }}
>
    
<div className='w-full h-[80vh] flex flex-col justify-center items-center text-center'>
    <h3 className='text-[5rem] text-[#000] font-bold'>HI I'M ALPHA SNIQUE</h3>
    <motion.p 
    className='text-[2rem] text-[#000]' 
    animate={{ opacity: isVisible ? 1 : 5 }} >AND I MIND YOUR BUSINESS</motion.p>
</div>

</div>

  )
}

export default Banner

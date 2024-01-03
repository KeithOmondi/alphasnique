import React from 'react';

const About = () => {
  return (
    <>

<div>
      <div
        id='about'
        className=' w-full h-[80vh] relative flex flex-col justify-center items-center text-center'
        style={{
          backgroundImage: "url(https://olvagroup.com/wp-content/uploads/2023/12/ovin-1536x1024-1-1024x683.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}
      >

        {/* Conditionally render the div based on screen size */}
        <div className='hidden md:absolute w-[50%] right-0 top-0 h-screen pl-24 flex flex-col justify-right items-right text-center p-8'>
          <h1
            className='justify-left items-left left-0 text-[3rem] font-bold pt-24 justify-center text-center pl-4'
            style={{ borderBottom: ".8rem solid yellow", width: "50%" }}
          >
            ABOUT ME
          </h1>
        </div>

        <div className='absolute bg-white w-full md:w-[55%] left-0 top-0 h-[80vh] flex flex-col justify-left items-left p-8'>
          <h3 className='justify-left items-left left-0 bg-yellow-500 rounded-md font-bold text-[1.5rem]'>
            WHO I AM
          </h3>

          <div>
            <h3 className='text-[2rem] pt-2 left-0 top-0 justify-left items-left text-left font-bold'>
              THE CHAIRMAN
            </h3>
          </div>
          <div>
            <h3 className='pt-4 left-0 top-0 justify-left items-left text-left'>ALPHA SNIQUE</h3>
          </div>
          <div className='left-0 top-0 justify-left items-left text-left font-bold pt-2'>
            KENYAN BUSINESSMAN, ENTREPRENEUR, <br /> INDUSTRIALIST AND PHILANTHROPIST
          </div>
          <div className='left-0 top-0 justify-left text-[15px] items-left text-left p-2'>
            <p>
              MR. Alpha Snique (h. c.) is a leading Kenyan entrepreneur with investments in the Media,
              Manufacturing, Property Management, Insurance and Investment Sectors of our economy.
              He is an alumnus of INSEAD Institute in France, Handles University in Sweden and Harvard Business School, USA.
              In acknowledgment of his contributions to the field of entrepreneurship,
              he was conferred with an Honorary Philosophical Doctorate in Entrepreneurship by the SMA University, Switzerland.
              <br />
              <br />
              Dr. Kirubi is Chairman of Haco Tiger Brands Kenya Limited, Capital Media Group,
              International House Limited, DHL Worldwide Express Limited, Nairobi Bottlers, and Smart Applications International Limited among others.
              He is Deputy Chairman of Bayer East Africa Limited and is a director and shareholder at the Centum Investment Group
            </p>
          </div>
        </div>
      </div>
     
    </div>
    </>
  );
};

export default About;

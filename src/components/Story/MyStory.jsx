import React from "react";
import Slider from "react-slick";

const MyStory = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
    <div>
      <div style={{ borderBottom: ".2rem solid #eee" }}>
        <div
          id="about"
          className="w-full h-[80vh] relative flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage:
              "url(https://olvagroup.com/wp-content/uploads/2023/12/ovin-1536x1024-1-1024x683.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Conditionally render the div based on screen size */}
          <div className="md:absolute hidden md:block w-[50%] left-0 top-0 h-screen pl-24 flex flex-col justify-left items-left text-center p-8">
            <h1
              className="justify-left pb-6 items-left h-[50%] left-0 text-[3rem] font-bold pt-24 justify-center text-center pl-4"
              style={{
                borderBottom: ".8rem solid yellow",
                width: "50%",
                borderLeft: ".8rem solid yellow",
              }}
            >
              MENTORSHIP
            </h1>
          </div>
          

          <div className="bg-white md:absolute w-full md:w-[50%] right-0 top-0 h-full md:h-[100%] pl-4 md:pl-24 flex flex-col justify-right items-right text-center p-8">
          <h1 className="left-0 top-0 justify-left font-bold text-[30px] items-left text-left p-2 pt-3 bg-yellow-600 border-md">
          MENTORSHIP
          </h1>
          
          <h1 className="left-0 top-0 justify-left font-bold text-[30px] items-left text-left p-2 pt-3 border-b-[2px] border-blue-500">
          ASK ALPHA ARCHIVES - CAPITAL BUSINESS
          </h1>

          <div className="pt-12 w-full h-[40%]">
          <Slider {...settings}>
      <div className="border-2 gap-2 ">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
      <div className="border-2 gap-2 mx-2">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
      <div className="border-2 gap-2 mx-3">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
      <div className="border-2 gap-2 mx-4">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
      <div className="border-2 gap-2 mx-4">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
      <div className="border-2 gap-2 mx-3">
        <h3>Website Design & Development</h3>
        <p className="text-[14px] pt-3 text-center justify-center items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Sed similique ad quam cumque perspiciatis deserunt maxime dolorum nemo illum odio.</p>
      </div>
    </Slider>
          </div>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default MyStory;

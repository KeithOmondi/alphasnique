import React from "react";
import Slider from "react-slick";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
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
            <div className="md:absolute hidden md:block w-[50%] left-0 top-0 h-h-[90%] pl-24 flex flex-col justify-left items-left text-center p-8">
              <h1
                className="justify-left pb-6 items-left h-[50%] left-0 text-[3rem] font-bold pt-24 justify-center text-center pl-4"
                style={{
                  borderBottom: ".8rem solid yellow",
                  width: "50%",
                  borderLeft: ".8rem solid yellow",
                }}
              >
                OPINION
              </h1>
            </div>

            <div className="bg-white md:absolute w-full md:w-[50%] right-0 top-0 h-full md:h-[100%] pl-4 md:pl-24 flex flex-col justify-right items-right text-center p-8">
              <h1 className="left-0 top-0 justify-left font-bold text-[30px] items-left text-left p-2 pt-3 border-b-[2px] border-blue-500">
                BLOG
              </h1>

              <div className="pt-12 w-full">
                <Slider {...settings}>
                  <div className="border-2 gap-2 ">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                  <div className="border-2 gap-2 mx-2">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                  <div className="border-2 gap-2 mx-3">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                  <div className="border-2 gap-2 mx-4">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                  <div className="border-2 gap-2 mx-4">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                  <div className="border-2 gap-2 mx-3">
                    <h3>Website Design & Development</h3>
                    <p className="text-[14px] pt-3 text-center justify-center items-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed similique ad quam cumque perspiciatis deserunt maxime
                      dolorum nemo illum odio.
                    </p>
                  </div>
                </Slider>
              </div>

              <div
  className="pt-12 flex flex-col md:flex-row w-full justify-between items-center text-center text-white bg-[#000] mt-12"
  style={{
    backgroundAttachment: "fixed",
    border: ".2rem solid yellow",
  }}
>
  <div className="pb-4 md:pb-36 pl-1 ">
    <h1 className="md:border-b-2 md:mb-4" style={{ borderBottom: ".2rem solid yellow" }}>
      Get in touch
    </h1>
    <div className="flex gap-1 pt-4">
      <FaFacebookF
        size={20}
        color="black"
        style={{
          background: "yellow",
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <FaTwitter
        size={20}
        color="black"
        style={{
          background: "yellow",
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <FaLinkedinIn
        size={20}
        color="black"
        style={{
          background: "yellow",
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  </div>

  <div className="pb-2 md:pb-24 pl-1 ">
    <h1 className=" md:mb-4" 
    style={{ borderBottom: ".2rem solid yellow" }}
    >CONTACT INFO</h1>
    <div className="gap-6 pt-4">
      <h2 className="flex gap-1"><FaPhoneAlt /> +254 73635342</h2>
      <p className="flex gap-1"> <IoIosPin />INTERNATIONAL HOUSE LIMITED, <br /> MAMA NGINA STREET,NAIROBI,</p>
      <p> P. O. BOX 41931 - 00100</p>
      <p className="flex gap-1"><FaRegEnvelope /> IHL@IHLKENYA.COM</p>
    </div>
  </div>

  <div className="pb-4 md:pb-36 pr-1">
    <h1 style={{ borderBottom: ".2rem solid yellow" }}>QUICK LINKS</h1>
    <div className="pt-4">
    <h1>Blog</h1>
    <h1>Gallery</h1>
    <h1>Work</h1>
    <h1>Education</h1>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

import React, { useState } from "react";

const Profile = () => {
  const ExpandableSection = ({ title, content }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
      setExpanded(!isExpanded);
    };

    return (
      <div style={{borderBottom:".2rem solid #eee"}}>
        <p
          className={`left-0 top-0 transition-all duration-500 justify-left text-[16px] items-left text-left p-2 cursor-pointer hover-yellow-500 ${
            isExpanded ? "text-yellow-500" : ""
          }`}
          onClick={toggleExpansion}
        >
          {title}
        </p>

        {isExpanded && (
          <div className="transition-all duration-500">{content}</div>
        )}
      </div>
    );
  };

  return (
    <div style={{borderBottom:".2rem solid #eee"}}>
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
        <div className='md:absolute hidden md:block w-[50%] left-0 top-0 h-screen pl-24 flex flex-col justify-left items-left text-center p-8'>
          <h1
            className='justify-left pb-6 items-left left-0 text-[3rem] font-bold pt-24 justify-center text-center pl-4'
            style={{ borderBottom: ".8rem solid yellow", width: "50%", borderLeft: ".8rem solid yellow"}}
          >
            MY PROFILE
          </h1>
        </div>

        <div className="bg-white md:absolute w-full md:w-[50%] right-0 top-0 h-full md:h-[100%] pl-4 md:pl-24 flex flex-col justify-right items-right text-center p-8">
          <h3 className="left-0 top-0 justify-left font-bold text-[25px] items-left text-center border-md p-1 bg-yellow-400 w-full md:w-[50%]">
            MY STORY
          </h3>
          <h1 className="left-0 top-0 justify-left font-bold text-[30px] items-left text-left p-2 pt-3 border-b-[2px] border-blue-500">
            PROFILE
          </h1>

          <div>
            <ExpandableSection
              title="Olva Groups"
              content={
                <>
                  <h3 className="left-0 top-0 justify-left text-[15px] items-left text-left p-2">
                    CHAIRMAN AND CEO
                  </h3>
                  <div className="flex gap-2">
                    <li>Education</li>
                    <li>Business</li>
                    <li>Health</li>
                  </div>
                  <div
                    className="left-0 top-0 justify-left text-[15px] items-left text-left p-2"
                    style={{ borderBottom: ".2rem solid #eee" }}
                  >
                    <p>
                      Alpha Snique is Chairman of Snique Motors Limited, Olva
                      Group Inc, Snique Adventures Limited, Fitro Kenya Limited,
                      Alpha Snique Foundation among others. He is Co-founder of
                      Ganji Credit Limited and is a director and shareholder at
                      the Ochoka East African Limited
                    </p>
                  </div>
                </>
              }
            />

            <ExpandableSection
              title="Olive Groups Founder"
              className="text-[20px]"
              content={
                <>
                  <h3 className="left-0 top-0 justify-left text-[15px] items-left text-left p-2">
                    DIRECTOR
                  </h3>

                  <div
                    className="left-0 top-0 justify-left text-[15px] items-left text-left p-2"
                    style={{ borderBottom: ".2rem solid #eee" }}
                  >
                    <p>
                      Alpha Snique is Chairman of Snique Motors Limited, Olva
                      Group Inc, Snique Adventures Limited, Fitro Kenya Limited,
                      Alpha Snique Foundation among others. He is Co-founder of
                      Ganji Credit Limited and is a director and shareholder at
                      the Ochoka East African Limited
                    </p>
                  </div>
                </>
              }
            />

            <ExpandableSection
              title="Publications"
              content={
                <>
                  <div
                    className="left-0 top-0 justify-left text-[15px] items-left text-left p-2"
                    style={{ borderBottom: ".2rem solid #eee" }}
                  >
                    <p>
                      Olva Group Inc. is a cutting-edge technology company
                      committed to driving innovation and transforming
                      industries through the power of technology. Established in
                      2010, our company has quickly become a recognized leader
                      in the tech space, delivering unparalleled solutions to
                      meet the evolving needs of businesses globally.
                    </p>
                  </div>
                </>
              }
            />

            <ExpandableSection
              title="Awards"
              content={
                <>
                  <div
                    className="left-0 top-0 justify-left text-[15px] items-left text-left p-2"
                    style={{ borderBottom: ".2rem solid #eee" }}
                  >
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos odio rem quo eius voluptatibus nobis nemo,
                      dolore dolor repellendus saepe.
                    </p>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

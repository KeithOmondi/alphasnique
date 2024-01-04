import React, { useEffect, useState } from 'react';
import styles from '../../styles/styles';

const Facts = () => {
  const [companiesOwned, setCompaniesOwned] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    let interval; // Declare interval outside the startCounting function

    // Function to start counting from 0 to the expected number
    const startCounting = (expectedNumber, setNumber) => {
      let count = 100;
      interval = setInterval(() => {
        count++;
        setNumber(count);
        if (count === expectedNumber) {
          clearInterval(interval);
        }
      }, 3000); // Adjust the interval for smoother counting
    };

    // Specify the expected numbers and start counting
    startCounting(200, setCompaniesOwned);
    startCounting(1000, setEmployees);
    startCounting(200, setPortfolioValue);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={`${styles.section} pt-24`}>
      <h3 className="font-bold text-[1.4rem]" style={{ borderBottom: '.4rem solid yellow' }}>SOME FACTS</h3>

      <div className='flex flex-col md:flex-row justify-between pt-2 border-md w-full pb-4 bg-[#eee] p-6 rounded-lg mb-12'>
        <div className='mb-6 md:mb-0 pl-4 pb-3 md:w-1/3'>
          <h2 className='pl-4 pb-3 font-bold'>{companiesOwned}</h2>
          <p className='text-[1.3rem] font-bold'>COMPANIES OWNED</p>
        </div>
        <div className='mb-6 md:mb-0 pl-4 pb-3 md:w-1/3'>
          <h2 className='pl-4 pb-3 font-bold'>{employees}</h2>
          <p className='text-[1.3rem] font-bold'>EMPLOYEES</p>
        </div>
        <div className='pr-4 md:w-1/3'>
          <h2 className='pl-4 pb-3 font-bold'>{portfolioValue}</h2>
          <p className='text-[1.3rem] font-bold'>PORTFOLIO VALUE</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;

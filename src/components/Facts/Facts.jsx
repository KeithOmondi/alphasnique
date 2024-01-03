import React from 'react'
import styles from '../../styles/styles'

const Facts = () => {
  return (
    <div className={`${styles.section} pt-12`} >
      <h3 className="font-bold text-[1.4rem]">SOME FACTS</h3>

      <div className='flex justify-between pt-2'>
        <div>
            <h2>200</h2>
            <p>COMPANIES OWNED</p>
        </div>
        <div>
            <h2>1400</h2>
            <p>EMPLOYEES</p>
        </div>
        <div>
            <h2>200</h2>
            <p>PORTFOLIO VALUE</p>
        </div>
      </div>
    </div>
  )
}

export default Facts

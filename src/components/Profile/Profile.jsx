import React from 'react'
import styles from '../../styles/styles'

const Profile = () => {
  return (
    <div className={`${styles.section}`}>
      <div>
        <h2 className='text-[1.5rem] font-bold bg-yellow-500 w-[30%] text-center rounded-md'>MY STORY</h2>
        <h2 className='text-[1.8rem] font-bold pt-6'>PROFILE</h2>
      </div>

      <div>
        <ul className='flex mx-2 gap-3'>
            <li>. Education</li>
            <li>. Education</li>
            <li>. Business</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile

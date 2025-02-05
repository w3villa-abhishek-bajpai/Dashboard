import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
    <div className='flex items-center justify-between bg-gray-100  px-6 py-4 '>
        <div className="">
            <p className="text-gray-700 ">Dashboard  <FontAwesomeIcon icon={faGreaterThan} />   Overview</p>
        </div>
    </div>
  )
}

export default Content

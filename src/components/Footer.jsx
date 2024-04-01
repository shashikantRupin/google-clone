import React from 'react'
import CountryLocal from './CountryLocal.jsx'

function Footer() {
  return (
    <footer className='absolute  bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className="border-b px-8 py-3">
            <CountryLocal />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            {/** list footer on the left */}
            <ul className='flex items-center space-x-6'>
                <li className='hoverunderline cursor-pointer'>About</li>
                <li className='hoverunderline cursor-pointer'>Advertising</li>
                <li className='hoverunderline cursor-pointer'>Business</li>
                <li className='hoverunderline cursor-pointer'>How Search works</li>
            </ul>
            {/**  list footer on the right */}
            <ul className='flex items-center space-x-6' >
                <li className='hoverunderline cursor-pointer'>Privacy</li>
                <li className='hoverunderline cursor-pointer'>Terms </li>
                <li className='hoverunderline cursor-pointer'>Settings</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
'use client';

import { useRouter } from 'next/navigation.js';
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'


function HomeSearch() {
    const [input, setInput] = useState('');
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const router = useRouter();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    };

    const randomSearch = async (e) =>{
        setRandomSearchLoading(true)
        const response = await fetch(
          "https://random-word-api.herokuapp.com/word?number=10"
        )
          .then((res) => res.json())
          .then((data) => data[0]);
        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandomSearchLoading(false)
    }
  return (
   <>
       <form className='flex w-full mt-5 mx-auto max-w-[90%] 
            border border-gray-200 px-5 py-3 rounded-full hover:shadow-md 
            focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
            onSubmit={handleSubmit}
       >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
        <input onChange={(e)=> setInput(e.target.value)} type="text" className='flex-grow focus:outline-none'/>
        <BsFillMicFill className='text-lg'/>
       </form>
       <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button onClick={handleSubmit} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>Google Search</button>
        <button  
            disabled={randomSearchLoading}
            className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none
             active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opaci-80 disabled:shadow-sm' 
            onClick={randomSearch}>
            {randomSearchLoading? 'Loading...' : 'I am Feeling Lucky' }
        </button>
       </div>
   </>
  )
}

export default HomeSearch
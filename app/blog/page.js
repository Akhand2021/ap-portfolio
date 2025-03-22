"use client";
import React from 'react';
import CommingSoon from "../assets/comming_soon.jpg"; 
import Image from "next/image";

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-5xl p-6'>Blog Page</h1>
            <div className='flex place-content-center'>
            <Image src={CommingSoon} className='h-200 w-200' alt='Coming soon'  />

            </div>
        </div>
    );
};

export default Blog;
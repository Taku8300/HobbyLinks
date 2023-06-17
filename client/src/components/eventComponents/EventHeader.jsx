import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function EventHeader({ imgUrl, title }) {
  return (
    <div>
      <div className='mt-2'>
        <h1 className='text-3xl font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum
        </h1>
        <div className='flex gap-2 my-5'>
          <FontAwesomeIcon icon={faUser} size='xl' li />
          <h2 className=''>Created by: User_01</h2>
        </div>
      </div>

      <div className='flex justify-center'>
        <img src={imgUrl} alt='' className='max-w-2xl h-[400px] w-full' />
      </div>
    </div>
  );
}

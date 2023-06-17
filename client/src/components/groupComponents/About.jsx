import React from "react";

function About({ desc }) {
  return (
    <div className='my-4'>
      <h1 className='text-3xl font-bold'>About</h1>
      <p className='font-normal'>
        {desc} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo voluptatibus
        inventore doloremque incidunt? Quas, consequatur asperiores quaerat impedit possimus dolorum
        non pariatur ad! Tempore odio libero eligendi minima laborum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Dolorum reprehenderit at omnis harum odio voluptatum ipsum
        suscipit accusantium cumque, pariatur illum aliquid dolore aliquam corporis quo quas. Iusto,
        aperiam sed.
      </p>
    </div>
  );
}

export default About;

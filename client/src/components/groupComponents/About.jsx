import React from "react";

function About({ desc }) {
  return (
    <div className="bg-blue-100">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="font-sans">{desc}</p>
    </div>
  );
}

export default About;

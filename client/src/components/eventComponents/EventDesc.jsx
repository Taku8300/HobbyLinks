import React from "react";

function EventDesc({ desc }) {
  return (
    <div>
      <h1>{new Date().toISOString()}</h1>
      <h2>3 Chome-中２−１ Chiyozaki, Nishi Ward, Osaka, 550-0023</h2>
      <div>Atendee list</div>
      <div>{desc}</div>
      <div>Map</div>
    </div>
  );
}

export default EventDesc;

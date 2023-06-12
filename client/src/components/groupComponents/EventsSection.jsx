import React from "react";

function EventsSection({ events }) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      {/* query all the event from this group */}
      <div>
        <img src={events.imgUrl} alt="" className="w-52" />
      </div>
      <div>{events.desc}</div>
    </div>
  );
}

export default EventsSection;

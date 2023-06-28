import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventHeader from "../components/eventComponents/EventHeader";
import EventDesc from "../components/eventComponents/EventDesc";
import axios from "axios";

function EventPage() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({
    imgUrl: "",
    title: "",
    desc: "",
    address: "",
    type: "",
    date: "",
    prefecture: "",
    created_by: "",
    eventId: eventId,
  });

  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/events/${eventId}`
        );

        setEventDetails({
          title: response.data.event_name,
          desc: response.data.desc,
          eventId: eventId,
          imgUrl: response.data.header_path,
          address: response.data.address,
          type: response.data.type,
          prefecture: response.data.prefecture,
          created_by: response.data.created_by,
          date: response.data.date,
        });
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/users/${eventDetails.created_by}`
        );
        setUser(response.data.user_name);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchEventsData();
    if (eventDetails.created_by) {
      fetchUser();
    }
  }, [eventId, eventDetails.created_by]);

  return (
    <>
      <div className=" min-h-screen bg-slate-50">
        <div className="flex flex-col mb-2 mx-auto max-w-6xl w-full bg-white  py-5 shadow-lg min-h-screen">
          <EventHeader
            imgUrl={eventDetails.imgUrl}
            title={eventDetails.title}
            user={user}
          />

          <EventDesc
            desc={eventDetails.desc}
            eventId={eventDetails.eventId}
            address={eventDetails.address}
            type={eventDetails.type}
            prefecture={eventDetails.prefecture}
            date={eventDetails.date}
          />
        </div>
      </div>
    </>
  );
}

export default EventPage;

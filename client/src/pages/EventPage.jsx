import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventHeader from "../components/eventComponents/EventHeader";
import EventDesc from "../components/eventComponents/EventDesc";
import AttendeesSection from "../components/eventComponents/AttendeesSection";
import axios from "axios";

function EventPage() {
  const { eventId } = useParams();

  const http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "X-Requested-with": "XMLHttpRequest",
    },
    withCredentials: true,
  });

  const [eventDetails, setEventDetails] = useState({
    imgUrl: "",
    title: "",
    desc: "",
    address: "",
    type: "",
    date: "",
    prefecture: "",
    created_by: "",
    group_name: "",
    group_id: "",
    eventId: eventId,
  });

  const [user, setUser] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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
          group_name: response.data.group_name,
          group_id: response.data.group_id,
          date: response.data.date,
        });
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };
    // for created by fix backend later
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

  //handle Join state
  const [joined, setJoined] = useState(false);
  //check if current user is in group if true setJoined to true
  const currentUserInGroup = async () => {
    try {
      const res = await http.get(
        `http://localhost:8000/api/events/${eventId}/users`
      );
      const attendees = res.data;

      const currentUserExists = attendees.some(
        (attendee) => attendee.user_id === currentUser.data.user_id
      );
      console.log("Is current user in Event?", currentUserExists);
      setJoined(currentUserExists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    currentUserInGroup();
  }, []);

  const handleJoinDelete = async () => {
    try {
      if (joined == true) {
        setLoading(true);
        // Send DELETE request to leave the group
        let formData = new FormData();
        formData.append("_method", "DELETE");
        formData.append("event_id", eventId);
        formData.append("group_id", eventDetails.group_id);
        formData.append("user_id", currentUser.data.user_id);
        const res = await http.post(
          `http://localhost:8000/api/events/${eventId}/users`,
          formData
        );
        console.log("Remove User from event", res);
        setMembers((prevMembers) =>
          prevMembers.filter(
            (member) => member.user_id !== currentUser.data.user_id
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinPost = async () => {
    try {
      if (joined == false) {
        setLoading(true);
        let formData = new FormData();
        formData.append("group_id", groupId);
        formData.append("user_id", currentUser.data.user_id);
        formData.append("group_id", eventDetails.group_id);
        const res = await http.post(
          `http://localhost:8000/api/events/${eventId}/users`,
          formData
        );
        console.log("Add User to event", res);
        const newMember = res.data.usersData;
        setMembers((prevMembers) => [...prevMembers, newMember]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  //fetch attendees
  const [attendees, setAttendees] = useState([]);
  const attendeesCount = attendees.length;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/events/${eventId}/users`
        );
        setAttendees(response.data);
      } catch (error) {
        console.error("Error fetching attendees:", error);
      }
    };

    fetchMembers();
  }, [eventId]);

  return (
    <>
      <div className=" min-h-screen bg-slate-50">
        <div className="flex flex-col mb-2 mx-auto max-w-6xl w-full bg-white  py-5 shadow-lg min-h-screen">
          <EventHeader
            imgUrl={eventDetails.imgUrl}
            title={eventDetails.title}
            group_name={eventDetails.group_name}
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

          <AttendeesSection eventId={eventId} attendees={attendees} />
        </div>
      </div>
    </>
  );
}

export default EventPage;

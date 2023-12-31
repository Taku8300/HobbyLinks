import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GroupHeader from "../components/groupComponents/GroupHeader";
import About from "../components/groupComponents/About";
import EventsSection from "../components/groupComponents/EventsSection";
import MemberSection from "../components/groupComponents/MemberSection";
import Photo from "../components/groupComponents/Photo";
import axios from "axios";

function GroupPage() {
  const { groupId } = useParams();

  const http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "X-Requested-with": "XMLHttpRequest",
    },
    withCredentials: true,
  });

  // Define the values in state
  const [groupDetails, setGroupDetails] = useState({
    imgUrl: "",
    title: "",
    desc: "",
    prefecture: "",
    groupId: groupId,
    created_by: "",
  });

  const [user, setuser] = useState(""); // for created by

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/groups/${groupId}`);

        setGroupDetails({
          title: response.data.group_name,
          desc: response.data.desc,
          prefecture: response.data.prefecture,
          groupId: groupId,
          events: response.data.events,
          imgUrl: response.data.header_path,
          created_by: response.data.created_by,
        });
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };

    //fetch for created_by  fix response in Backend Later
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/users/${groupDetails.created_by}`
        );
        setuser(response.data);

        if (currentUser.data.user_id === groupDetails.created_by) {
          setJoined(true);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchGroupData();
    if (groupDetails.created_by) {
      fetchUser();
    }
  }, [groupId, groupDetails.created_by]);

  //handle Join group btn
  const [joined, setJoined] = useState(false);
  //check if current user is in group if true setJoined to true
  const currentUserInGroup = async () => {
    try {
      const res = await http.get(`http://localhost:8000/api/groups/${groupId}/users`);
      const members = res.data;

      const currentUserExists = members.some(
        (member) => member.user_id === currentUser.data.user_id
      );
      //console.log("Is current user in group?", currentUserExists);
      setJoined(currentUserExists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    currentUserInGroup();
  }, []);

  const handleJoinGroupBtn = async () => {
    if (joined) {
      await handleJoinDelete(); // Leave the group
    } else {
      await handleJoinPost(); // Join the group
    }
    // Toggle the joined state
    setJoined((prev) => !prev);
  };

  const handleJoinDelete = async () => {
    try {
      if (joined == true) {
        setLoading(true);
        // Send DELETE request to leave the group
        let formData = new FormData();
        formData.append("_method", "DELETE");
        formData.append("group_id", groupId);
        formData.append("user_id", currentUser.data.user_id);
        const res = await http.post(`http://localhost:8000/api/groups/${groupId}/users`, formData);
        console.log("Remove User to group", res);
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.user_id !== currentUser.data.user_id)
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
        const res = await http.post(`http://localhost:8000/api/groups/${groupId}/users`, formData);
        console.log("Add User to group", res);
        const newMember = res.data.usersData;
        setMembers((prevMembers) => [...prevMembers, newMember]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  //fetch memeber
  const [members, setMembers] = useState([]);
  const membersCount = members.length;
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/groups/${groupId}/users`);
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [groupId]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <div className='flex flex-col mb-2 mx-auto max-w-5xl bg-white px-5 py-5 shadow-lg min-h-screen'>
          {/* btnsection */}
          <GroupHeader
            groupId={groupId}
            imgUrl={groupDetails.imgUrl}
            title={groupDetails.title}
            user={user.user_name}
            prefecture={groupDetails.prefecture}
            membersCount={membersCount}
          />

          <div className='flex mt-10 '>
            <div>
              <button
                type=''
                className='w-[130px] border hover:border-purple-500 border-b-4 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-2 ml-5'
              >
                About
              </button>
              <button
                type=''
                className='w-[130px] border hover:border-purple-500 border-b-4 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-2'
              >
                Members
              </button>
              <button
                type=''
                className='w-[130px] border hover:border-purple-500 border-b-4 font-medium rounded-lg text-lg px-5 py-2.5 
                text-center m-2'
              >
                Events
              </button>
              <button
                type=''
                className='w-[130px] border hover:border-purple-500 border-b-4 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-2'
              >
                Picture
              </button>
              <button
                type=''
                className='w-[130px] border hover:border-purple-500 border-b-4 font-medium rounded-lg text-lg px-5 py-2.5 text-center m-2'
              >
                Discussion
              </button>
            </div>
            <div>
              <button
                className={`w-30 font-bold px-5 py-2.5 text-center m-2 ml-10 ${
                  joined
                    ? "text-white bg-red-500 hover:bg-red-800 hover:border-red-600 border-red-400 border-b-4 rounded-lg"
                    : "text-white bg-purple-500 hover:bg-purple-800 hover:border-purple-600 border-purple-400 border-b-4 rounded-lg"
                }`}
                onClick={handleJoinGroupBtn}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Loading..." : joined ? "Leave This Group" : "Join This Group"}
              </button>
            </div>
          </div>

          <About desc={groupDetails.desc} />
          <EventsSection events={groupDetails.events} />
          <MemberSection groupId={groupId} members={members} />
          <Photo />
        </div>
      </div>
    </>
  );
}

export default GroupPage;

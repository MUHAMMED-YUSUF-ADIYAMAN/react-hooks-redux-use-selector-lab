import React from "react";
// add any needed imports here
import {  useSelector } from "react-redux";



function Users() {
  const users = useSelector((state) => state.users);
  console.log(users);
  console.log(users.length);
  return (
    <div>
      <ul>
        Users!
          {users?.map((user,i)=><li key={i}>{user.username}</li>)}
          <br></br>
          <div>Total Users: {users.length}</div> 
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;

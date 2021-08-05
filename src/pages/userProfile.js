import React from 'react';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';

const UserProfile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div>
        <img className="rounded-full h-24 w-24" src="" />
      </div>

      <div>
        <h2 className="mt-10">Name</h2>
        <p className="mt-5">Description</p>
      </div>

      <div className="mainpagecontainer">
      {/* {data.map((d) => (
        

      ))} */}

      </div>

    </div>
  );
};

export default UserProfile;



// <p>First Name: {data.user.firstName}</p>
// <p>Last Name: {data.user.lastName}</p>
// <p>Email: {data.user.email}</p>
import React from 'react';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';
import UploadFile from '../components/UploadFile/UploadFile';


const UserProfile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <img className="rounded-full h-24 w-24" />
      </div>

      <div className="" >
        <div><h2 className="flex justify-center mt-5 text-xl">{data.user.firstName}</h2></div>
        <div><p className="flex justify-center mt-10">{data.user.bio}</p></div>
      </div>

        <div className="flex justify-center mt-10 space-x-60">
    <p>My Tattoos</p> <p>Saved</p>
        </div>
      <div className="mainpagecontainer">
        <UploadFile />
      

      </div>

    </div>
  );
};

export default UserProfile;



// <p>First Name: {data.user.firstName}</p>
// <p>Last Name: {data.user.lastName}</p>
// <p>Email: {data.user.email}</p>
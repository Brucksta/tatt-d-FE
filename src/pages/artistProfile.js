import React from 'react';
import { QUERY_ARTIST } from '../api/queries';
import { useQuery } from '@apollo/client';

const ArtistProfile = () => {
  const { data, loading } = useQuery(QUERY_ARTIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <img className="rounded-full h-24 w-24" src />
      </div>

      <div className="">
        <div>
          <h2 className="flex justify-center mt-5">NAME</h2>
        </div>
        <div>
          <p className="flex justify-center mt-10">Description</p>
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-60">
        <p>Tattoos</p> <p>Flash</p> <p>Book</p>
      </div>
      <div className="mainpagecontainer"></div>
    </div>
  );
};

export default ArtistProfile;

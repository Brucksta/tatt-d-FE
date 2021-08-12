import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QUERY_USER } from "../api/queries";
import { useQuery } from "@apollo/client";
import ArtistProfile from "../components/Artist/ArtistProfile";
import UserProfile from "../components/User/UserProfile";
import ArtistStyle from "../components/Artist/ArtistStyle";

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <img className="rounded-full h-24 w-24" />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        //if artist
        <div className="">
          <div>
            <h2 className="flex justify-center mt-5 text-xl">
              {data.user.firstName}
            </h2>
          </div>
          <div>
            <p className="flex justify-center mt-10">
              {data.user.bio}
              {data.user.artist ? <ArtistStyle /> : null}
            </p>
          </div>
        </div>
      )}

      {!loading && data.user.artist ? (
        <ArtistProfile />
      ) : (
        //if user
        <UserProfile />
      )}
      <div className="flex justify-center mt-10 space-x-60"></div>
    </div>
  );
};

export default Profile;

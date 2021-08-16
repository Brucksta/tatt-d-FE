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
    <div>
    {loading ? (
      <div>Loading...</div>
    ) : (
    <div className="mt-10">
      <div className="flex justify-center">
        <img className="rounded-full h-24 w-24" src={`${process.env.REACT_APP_BASEURL}/${data.user.profilePicture}`} alt={data.user.profilePicture}/>
      </div>
       
        <div>
          <div>
            <h2 className="flex justify-center mt-5 font-bold">
              {data.user.firstName}{" "}{data.user.lastName}
            </h2>
          </div>
          <div className="border-b-2 border-gray-300 w-5/6 ml-40 mr-40">
            <p className="flex justify-center mt-10">
              {data.user.bio}
            </p>
              <div className="flex justify-center mt-10 mb-10">
                
                {data.user.artist ? <ArtistStyle /> : null}
              </div>
          </div>
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

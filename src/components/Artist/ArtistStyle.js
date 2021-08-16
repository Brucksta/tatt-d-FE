import React from "react";
import { QUERY_USER } from "../../api/queries";
import { useQuery } from "@apollo/client";

export default function ArtistStyle() {
    const { data, loading } = useQuery(QUERY_USER) 
    if (loading) 
        return <div>Loading...</div>;
    
    return (
        <div>
        <p className="font-bold">Styles:</p>
        {" "}{data.user.style}
        </div>
    )
}
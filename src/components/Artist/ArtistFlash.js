import React from 'react';
import { QUERY_USER } from '../../api/queries';
import { useQuery } from '@apollo/client';


const Flash = () => {
const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

return (
    <div className="flex justify-center">
<div className="mainpagecontainer mt-16 grid grid-cols-3 gap-4">
<p>hey</p>
{data.user.style.map( (image, index) => (
  <div className="w-96 h-96 rounded-md border-2 border-black" key={index}>
      <img src={`${process.env.REACT_APP_BASEURL}/${image}`} alt={image} />
  </div>
))}

</div>
</div>
)
}

export default Flash
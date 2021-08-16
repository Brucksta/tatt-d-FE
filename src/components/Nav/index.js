import React, { useEffect } from 'react';
import Auth from '../../state/auth';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FIND_USER, QUERY_USER } from '../../api/queries';
import { useQuery } from '@apollo/client';
import SearchBar from './Search';
import SearchFeature from './Search';
import profileIcon from './profile.png'

function Nav() {
  function showNavigation() {

    

    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mr-10">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mr-10">
            <Link to="/upload">Upload</Link>
            </li>
          <li className="mr-10">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  // const { data, loading } = useQuery(FIND_USER);
  // if (loading) {
  //   return <div>Loading...</div>;
//   }
  
// const [open, setOpen] = React.useState(false);
// const [options, setOptions] = React.useState([]);
// const loading = open && options.length === 0;

// React.useEffect(() => {
// let active = true;

// if (!loading) {
//   return undefined;
// }

// (async () => {
//   const response = await useQuery(FIND_USER)
 
//   const userList = await response.json();

//   if (active) {
//     setOptions(Object.keys(userList).map((key) => userList[key].item[0]));
//   }
// })();

// return () => {
//   active = false;
// };
// }, [loading]);

// React.useEffect(() => {
// if (!open) {
//   setOptions([]);
// }
// }, [open]);

  
  return (
    <header className="flex-row px-1 justify-center flex align-middle items-center">
      <h1 className="text-gray-500 mr-20">
        <Link to="/">Tatt'd</Link>
      </h1>
      
      {/* <div className="ml-10">
      <Autocomplete
  id="combo-box-demo"
  options={options}
  style={{ width: 300, }}
  renderInput={(params) => (
    <div ref={params.InputProps.ref}>
      <input style={{ width: 200 }} type="text" {...params.inputProps} />
    </div>)} />
  </div> */}
<SearchFeature />

      <nav className="ml-40">{showNavigation()}</nav>
    </header>
  );
}


export default Nav;


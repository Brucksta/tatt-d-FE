import React from 'react';
import Auth from '../../state/auth';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { data } from 'browserslist';
import { QUERY_USER } from '../../api/queries';
import { useQuery } from '@apollo/client';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-1">
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

  const { data, loading } = useQuery(QUERY_USER);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex-row px-1 justify-center flex align-middle items-center">
      <h1>
        <Link to="/">Tatt'd</Link>
      </h1>
      
      <div className="ml-10">
      {/* <Autocomplete
  id="combo-box-demo"
  options={data.user.firstName}
  getOptionLabel={(option) => option.firstName}
  style={{ width: 300, }}
  renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
/> */}
</div>

      <nav className="ml-40">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

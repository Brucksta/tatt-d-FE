import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', artist: false });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input placeholder="First" name="firstName" type="firstName" id="firstName" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input placeholder="Last" name="lastName" type="lastName" id="lastName" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
        </div>
        <div className="flex-row space-between mt-10">
          <p>Are you an artist?</p>
        </div>
        <div className="flex-row">
        <label className="mr-4" for="artist">Artist</label>
          <input type="checkbox" id="artist" name="artist" value={formState.artist} onChange={handleChange}/>
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

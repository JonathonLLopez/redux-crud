import { useState } from 'react';
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { userAdded } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = pathname.replace("/edit-user/", "");
  const user = useSelector((state) => state.users.find((user) => user.id === userId));

  const history = useHistory();
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null)

  const handleName = e => setName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    console.log('test')
    if(name && email) {
      console.log('has deets')
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email
        })
      )
      setError(null);
      history.push('/')
    } else {
      setError('Please fill in all fields')
    }
    setName('');
    setEmail('');
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
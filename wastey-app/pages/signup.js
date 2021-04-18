import React, { useState } from "react";
import { useAuth } from "../src/useAuth";

export default function Signup() {
  const { user, loading, signup } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(error);
  console.log(user);
  return (
    <form
      onSubmit={async event => {
        event.preventDefault();
        return signup(email, password, setError);
      }}
    >
      <label htmlFor='username'></label>

      <input
        required
        id='displayName'
        name='displayName'
        type='text'
        placeholder='Username'
        maxLength={20}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor='email'></label>
      <input
        required
        id='email'
        name='email'
        type='text'
        placeholder='Email address'
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor='password'></label>
      <input
        required
        id='password'
        name='password'
        type='password'
        placeholder='Password'
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
}

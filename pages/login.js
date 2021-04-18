import React, { useState } from "react";
import { authContext, useAuth } from "../src/useAuth";
import Router from "next/router";
import styles from "../styles/Signup.module.css";
import Link from "next/Link";

export default function Signup() {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(error);

  return (
    <div className={styles.login__box}>
      <h2>Signup</h2>
      <form
        onSubmit={async event => {
          event.preventDefault();
          return signin(email, password);
        }}
      >
        <div className={styles.user__box}>
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
        </div>
        <div className={styles.user__box}>
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
        </div>
        <button type='submit'>Log in</button>
        <Link href='signup'>
          <a className={styles.link}>signup instead</a>
        </Link>
      </form>
    </div>
  );
}

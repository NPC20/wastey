import React, { useState } from "react";
import { authContext, useAuth } from "../src/useAuth";
import Router from "next/router";
import styles from "../styles/Signup.module.css";
import Link from "next/link";

export default function Signup() {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className={styles.login__box}>
      <h2>Signup</h2>
      <form
        onSubmit={async event => {
          event.preventDefault();
          return signup(email, password, setError);
        }}
      >
        <div className={styles.user__box}>
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
        </div>
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

        <button type='submit'>Sign Up</button>
        <Link href='login'>
          <a className={styles.link}>login instead</a>
        </Link>
      </form>
    </div>
  );
}

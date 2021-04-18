import React from "react";
import Link from "next/link";

import { useAuth } from "../src/useAuth.js";
export default function Navbar(props) {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();
  return (
    <div>
      <div>
        <Link href='/week/new'>Start a new week</Link>
        {auth.user ? (
          <>
            <Link href='/account'>Account ({auth.user.email})</Link>
            <button onClick={() => auth.signout()}>Signout</button>
          </>
        ) : (
          <Link href='/signup'>Sign up</Link>
        )}
        <Link href='/summary'>Summary</Link>
      </div>
    </div>
  );
}

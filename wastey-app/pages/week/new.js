
import React from "react";

import Router from 'next/router';
import {useAuth} from "../../src/useAuth";

export default function New () {
    const { user, loading } = useAuth();
  
  
    if (!loading && !user) {
        typeof window !== 'undefined' && Router.push('/signup');
    }
  
  
    return (
      <>
    <h1>start a new week +</h1>
      </>
    );
  };
  

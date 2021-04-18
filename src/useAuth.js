import React, { useState, useEffect, useContext, createContext } from "react";
// import * as firebase from "firebase/app";
import { auth, app, db } from "./connection";

export async function createUser(uid, data) {
  return await db
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const authhook = useProvideAuth();
  return <authContext.Provider value={authhook}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const handleUser = async rawUser => {
    console.log("handleUser called", new Date());
    console.log("raw user", rawUser);
    if (rawUser) {
      // const currentUser = auth().currentUser;
      // const { user, loading } = useAuth();
      // console.log(user);
      // createUser(user.uid, userWithoutToken);
      console.log("user set");
      console.log(rawUser);
      setUser(rawUser);

      setLoading(false);
    } else {
      setUser(false);
      setLoading(false);
      // return false;
    }
  };
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        handleUser(response.user);

        window.location.href = "/";
        return response.user;
      });
  };
  const signup = (email, password, setError) => {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);

        handleUser(response.user);
        window.location.href = "/";
      })
      .catch(e => {
        setError(e);
        console.log(e);
      });
  };
  const signout = () => {
    return app
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  const sendPasswordResetEmail = email => {
    return app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return app
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // // ---breaks stuff!
  // useEffect(() => {
  //   const unsubscribe = () =>
  app.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("we got to set user!!");
      setUser(user);
    } else {
      setUser(false);
    }
  });
  //   return () => unsubscribe();
  //   // Cleanup subscription on unmount
  // }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

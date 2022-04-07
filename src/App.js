import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, ProviderId, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user)
    })
      .catch(error => {
    console.log(error)
  })

  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>Name: {user.displayName}</h2>
      <h4>Email: { user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;

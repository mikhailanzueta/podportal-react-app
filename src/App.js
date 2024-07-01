import React from 'react'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Discover from './components/discover'
import Library from './components/library'
import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
// import CryptoJS from 'crypto-js';
// import crypto from 'crypto-browserify'




function App() {

  // ======== Required values ======== 
    // WARNING: don't publish these to public repositories or in public places!
    // NOTE: values below are sample values, to get your own values go to https://api.podcastindex.org 
    //manually define the key and secret in strings.
    // ======== Hash them to get the Authorization token ======== 
    //This package is no longer supported. It's now a built-in Node module. If you've depended on crypto, you should switch to the one that's built-in. //Docs re: crypto - https://nodejs.org/docs/latest-v7.x/api/crypto.html#crypto_crypto

    
    // ======== Hash them to get the Authorization token ======== 
    // let apiHeaderTime = Math.floor(Date.now()/1000); //console.log(`apiHeaderTime=[${apiHeaderTime}]`);
    // let sha1Algorithm = "sha1"; 
    // let sha1Hash = crypto.createHash(sha1Algorithm);
    // let Authorization = process.env.REACT_APP_API_KEY + process.env.REACT_APP_API_SECRET_KEY + apiHeaderTime;
    // sha1Hash.update(Authorization); 
    // let hash4Header = sha1Hash.digest('hex'); 
    // console.log(`hash4Header=[${hash4Header}]`);

    const [user, setUser] = useState(
      localStorage.getItem('user') || {}
    );

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/library' element={<Library />} />
        <Route path='/signup' element={<Signup  user={user} setUser={setUser}/>}/>
        <Route path='/login' element={<Login  user={user} setUser={setUser}/>}/>
        <Route path='/home' element={<Home  />} />
      </Routes>
    </div>
  );

}

export default App;
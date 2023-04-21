import React, { useEffect, useState } from 'react'
import Home from './home/Home';
import Login from './login/Login';

const Layout = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token'))
      setIsSubmitted(true)
  }, [])
 
  return (
    <div className='layout'>
      {isSubmitted ? <Home /> : <Login />}
    </div>
  )
}

export default Layout
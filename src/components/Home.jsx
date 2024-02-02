import React, { useState } from 'react'
import '../styles/Home.css'
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {

  const base_url = "https://api.quotable.io";
  
  const [response, setResponse] = useState({})

  useEffect(() => {
    axios.get(base_url+'/random')
      .then(function (res) {
        setResponse(res.data)
      })
      .catch(function (error) {
        // handle error
        alert('Something went wrong, please reload app.')
      });
  }, [])



  return (
    <div className='container'>
      <div className="quote">
        <div className="content">
          {response.content}
        </div>

        <div className="author">
          — {response.author}
        </div>

      </div>
    </div>
  )
}

export default Home

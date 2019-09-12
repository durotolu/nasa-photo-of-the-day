import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from "./Header.js";
import Date from "./Date";
import Image from "./Photo";
import Title from "./Title";
import Description from "./Description";

let newApi = '';

const api = 'https://lambda-github-api-server.herokuapp.com/' + newApi;

function App() {
  
  let [newData, setData] = useState('');
  let [newApi, handleChange] = useState()
  

  useEffect(() => {
    axios.get(api)
    .then((response) => {
      setData(newData= response.data);
    })
  }, []);

  useState (() => {
    //console.log(newData.date);
    handleChange(newApi = '&date=$' + '2019-09-10');
    //console.log(api);
  })

  return (
    <div className="App">
      <Header />
      <Date date={newData} handleChange={handleChange} />
      <Image image={newData} />
      <Title title={newData} />
      <Description description={newData} />
    </div>
  );
}

export default App;

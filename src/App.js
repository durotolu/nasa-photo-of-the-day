import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from "./Header.js";
import Date from "./Date";
import Image from "./Photo";
import Title from "./Title";
import Description from "./Description";

const api = 'https://lambda-github-api-server.herokuapp.com/';

function App() {
  let [newData, setData] = useState('');

  useEffect(() => {
    axios.get(api)
    .then((response) => {
      setData(newData= response.data);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Date date={newData} />
      <Image image={newData} />
      <Title title={newData} />
      <Description description={newData} />
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import data from "../Data/data.json";
import "./App.css";
let rand = Math.floor(Math.random() * 100 + 1);
console.log(rand);
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("../Data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Libreary.com</h1>
      <div className="card-wrapper">
        {books.map((el, index) => {
          return (
            <div key={index} className="books">
              <img
                src="https://t4.ftcdn.net/jpg/02/79/10/53/360_F_279105377_aYUbOHB6OiFi88lPF12UoeyHJ1gmZhkz.jpg"
                alt=""
              />
              <h2>Title: {el.title}</h2>
              <h3>Muallif: {el.author}</h3>
              <span>Davlat: {el.country}</span> <br />
              <span>Published: {el.year} yil</span>
              {el.year < 0 ? " Milloddan avvalgi" : " Milodiy"}
              <br />
              <span>Hajmi: {el.pages} pages</span>
              <a href={el.link}>More info</a> <br />{" "}
              {el.year < 1950 ? " Old" : " New"}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

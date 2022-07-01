import React, { useEffect, useState } from 'react';
import api from './services/api';

import fundo from './img/fundo.jpeg'

import './App.css';

export default function Main() {
  const [comics, setComics] = useState({});
  
  useEffect(() => {
    async function loadComics() {
      const response = await api.get(
        "comics?ts=1&apikey=d1a55fa2eb1f4a2a94c15f68a7e75e18&hash=c587ae9d233b8396648871ce70caeff3"
      );
      
      setComics(response.data.data);
    }
    loadComics()
  }, []); 
  console.log(comics);

  return (
  <div className="main-container">
      <div className="container-comics">
        <img src={fundo} alt="fundo" />
      </div>
      <div className="box-input">
          <ul>
            <li>
              <a href="">Home</a>
              <a href="">Comics</a>
              <a href="">Marvel History</a>
            </li>
          </ul>
      </div>
    <div className="box-comics">
      {comics && comics.results && comics.results.length > 0 && (
        <ul>
          {comics.results.map((comic) => (
            <li key={comic.id}>
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="img" />
              <footer>
                <strong>
                  <p className="word">{comic.title}</p>
                </strong>
              </footer>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
}


//import React from 'react';
//import {Component} from 'react';
import Board from './components/Board';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthUserContext, withAuthorization } from '../Session';
import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';



var randomWords = require('random-words');

var random = randomWords();
var quote = 'How do robots pay for things? With cache, of course!';
var imageAddress = 'https://robohash.org/' + random + '.png';

axios.get(`https://v2.jokeapi.dev/joke/Programming,Pun?type=single`)
      .then(res => {
        const data = res.data;
        quote = data.joke;
      });
const greeting = <AuthUserContext.Consumer>
{authUser => (
  <div>
    <h1>Hi, {authUser.email}</h1>
  </div>
)}
</AuthUserContext.Consumer>;

function App() {
  return (
    <div>
      <div className="heading">
      <h1>DK's MineSweeper</h1>
      {greeting}
      </div> 
      <div className="container">
        <div className="aligned">
        <div className="quoteBox"><p>"{quote}"</p></div> 
        <img src={imageAddress}></img>
        <Board />
       </div>
      </div>
      <p>This game was built in React, has a firebase backend for storing user log-ins, uses the RoboHash api to fetch a new random robot and a random joke api for the robot to say upon login.</p>
    </div>
  );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(App);
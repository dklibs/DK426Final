
import { Link } from 'react-router-dom';
import { withAuthorization } from '../Session';
import React, { useEffect, useState } from 'react';
function App() {
    return (
      <div>
        <div >
        <h1>Weoclome!</h1>
        </div>
        <p>This is DK's fun final project.</p>
        <ul>
            <li>
                Built in React
            </li>
            <li>Firebase Backend</li>
        </ul>
      </div>
    );
  }

  const condition = authUser => !!authUser;
  export default withAuthorization(condition)(App);
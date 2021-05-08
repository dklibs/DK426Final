import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

 
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );
   
  const NavigationAuth = () => (
    <div className="alignHeader">
      
      <Link className= 'formatTest' to={ROUTES.HOME}>Home</Link>
      
      <Link className= 'formatTest' to={ROUTES.ACCOUNT}>Account</Link>
      
      <h1 className="siteTitle">Comp426 Final Project</h1>

      <div>
        <SignOutButton className="cancelbtn"/>
      </div>
  
    </div>
  );
   
  const NavigationNonAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  );
 
export default Navigation;

<ul>
      <li>
        <Link className= 'formatTest' to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link className= 'formatTest' to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
//import { Fragment } from "react";
import './App.css'
import Home from './components/Home'

function App() {
  //Array Method

  /* return [
    <ul>
      <li>
        React is JavaScript frontend Library used for creating User Interface
      </li>
    </ul>,
    <h1>Welcome to React</h1>,
    <h2>Jordan Walke</h2>,
    <h3>Meta</h3>,
  ]; */

  //Fragment Comp
  /* return (
    <Fragment>
      <ul>
        <li>
          React is JavaScript frontend Library used for creating User Interface
        </li>
      </ul>
      <h1>Welcome to React</h1>
      <h2>Jordan Walke</h2>
      <h3>Meta</h3>
    </Fragment>
  ); */

  //div tag

  /* return (
    <div>
      <ul>
        <li>
          React is JavaScript frontend Library used for creating User Interface
        </li>
      </ul>
      <h1>Welcome to React</h1>
      <h2>Jordan Walke</h2>
      <h3>Meta</h3>
    </div>
  ); */

  //empty tag
  /* return (
    <>
      <ul>
        <li>
          React is JavaScript frontend Library used for creating User Interface
        </li>
      </ul>
      <h1>Welcome to React</h1>
      <h2>Jordan Walke</h2>
      <h3>Meta</h3>
    </>
  ); */

  return (
    <div className="hero">
      <label htmlFor="fullname">Enter User Name - </label>
      <input type='text' id="fullname"></input>
      <ul>
        <li>
          React is JavaScript frontend Library used for creating User Interface
        </li>
      </ul>
      <h1>Welcome to React</h1>
      <h2>Jordan Walke</h2>
      <h3>Meta</h3>

      <Home></Home>
    </div>
  );
}
export default App;

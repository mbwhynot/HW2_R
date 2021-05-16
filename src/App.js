import './App.css';
import React from 'react';
class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        <h1>
        Hello world !
        </h1>
      </div>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <header>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      </header>
    );
  }
}

export default App;

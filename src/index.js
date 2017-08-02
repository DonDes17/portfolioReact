import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello vous !</h1>
        <input type="text"/>
      </div>
    )
  }
}


render(
  <App />,
  document.getElementById('root')
);
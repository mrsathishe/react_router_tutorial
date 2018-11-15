import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li> <Link to={`${match.url}/rendering`}>Rendering with React</Link> </li>
      <li> <Link to={`${match.url}/components`}> Compoents </Link> </li>
      <li> <Link to={`${match.url}/prop-vs-state`}> Prop vs State </Link> </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    {/* <Route path={`${match.url}/components` component={Topic} />
    <Route path={`${match.url}/prop-vs-state` component={Topic} /> */}
    <Route exact path={match.url} render={()=>(
      <div>
        Please Select a topic
      </div>
    )} />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/topics">Topics</Link> </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>         
      </div>
    );
  }
}

export default App;

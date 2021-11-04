import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/topics'>Topics</Link>
      <button onClick={() => props.history.push('/topics')}>Topics2</button>
    </div>
  )
}

const TopicList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link><br/>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link><br/>
      <Link to={`${props.match.url}/22`}>TO TOPIC 22</Link>

    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic Details PAGE: {props.match.params.topicId}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/blog/wgwrhtjf/topics' component={TopicList}/>
      <Route exact path='/blog/wgwrhtjf/topics/:topicId' component={TopicDetail}/>
    </div>
  )
}

export default App;

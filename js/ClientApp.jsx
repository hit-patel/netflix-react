const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')
const ShowDetail= require('./ShowDetail')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
        <Route path='/showdetail' component={ShowDetail} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))

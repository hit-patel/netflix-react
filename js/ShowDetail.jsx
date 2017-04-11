const React = require('react')
const { Link } = require('react-router')
const data = require('../public/data')

const ShowDetail = (props) => (
  <div>
  <Link to='/search'>
button
   </Link>
   {console.log(props.params)}
   </div>
)
module.exports = ShowDetail

const React = require('react')
const ShowDetail= require('./ShowDetail')
const { Link } = require('react-router')

const ShowCard = (props) => (
 <Link to='/showdetail' params={props.show}>
    <div className='show-card'>
      <img src={`public/img/posters/${props.show.poster}`} className='show-card-img' />
      <div className='show-card-text'>
      <h3 className='show-card-title'>{props.show.title}</h3>
      <h4 className='show-card-year'>({props.show.year})</h4>
      <p className='show-card-description'>{props.show.description}</p>
      </div>
    </div>
  </Link>
)

ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}

module.exports = ShowCard

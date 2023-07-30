
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './User.css'
  
  
export default class User extends Component {
  render() {
    return (
      <div className='userBody'>
        <div className='userTitle'>
          <div className='blockImg'>
            <img src={this.props.img} alt="User avatar" className='userImg'/>
          </div>
          <p className='userPreTitle'>{this.props.name}</p>
          <p className='userTag'>@{this.props.tag}</p>
          <p className='userLocal'>{this.props.location}</p>
        </div>
        <ul className='statisticList'>

          <li className='statisticItem'>
            <span className='itemText'>Followers</span>
            <span className='itemData'>{this.props.followers}</span>
          </li>

          <li className='statisticItem'>
            <span className='itemText'>Views</span>
            <span className='itemData'>{this.props.views}</span>
          </li>

          <li className='statisticItem'>
            <span className='itemText'>Likes</span>
            <span className='itemData'>{this.props.likes}</span>
          </li>

      </ul>
      </div>
    )
  }
}


User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

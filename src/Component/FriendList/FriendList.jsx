import React from 'react'
import FriendItem from './FriendItem/FriendItem'
import './FriendList.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  return (
    
    <ul className='friend'>
          {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}    
    </ul>
    
  )
}


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};


export default FriendList


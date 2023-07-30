import React from 'react'
import FriendItem from './FriendItem/FriendItem'
import './FriendList.css'


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

export default FriendList

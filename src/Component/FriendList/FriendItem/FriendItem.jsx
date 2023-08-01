import React from 'react'
import PropTypes from 'prop-types';
// import './FriendItem.css'
import {FriItem, Status} from './FriendItem.styled'

export default function FriendItem({ avatar, name, isOnline }) {
  return (
  
    <FriItem class="friends-item">
      <Status className="status" isOnline={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriItem>

  )
}



FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import React from 'react'
import PropTypes from 'prop-types';
import './FriendItem.css'

export default function FriendItem({ avatar, name, isOnline }) {
  return (
  
          <li class="friends-item">
            {isOnline> 0 ? (
                   <span class="status"></span>
                ) : (
                    <span class="status-false"></span>
                )}
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
              <p class="name">{name}</p>
    </li>

  )
}



FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

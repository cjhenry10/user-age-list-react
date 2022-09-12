import React from 'react'
import style from './User.module.css';

const User = (props) => {
  return (
    <div className={style.user}>
        <span>{props.name}</span><span>({props.age} years old)</span>
    </div>
  )
}

export default User
import React from 'react';
import Card from '../../UI/Card/Card';
import User from '../User/User';

const UserList = (props) => {
  const users = props.users;
  if (users.length === 0) {
    return;
  }
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <User
            key={Math.random().toString()}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

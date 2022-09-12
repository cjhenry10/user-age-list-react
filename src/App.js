import Card from './components/UI/Card/Card';
import UserInput from './components/Users/UserInput/UserInput';
import { useState } from 'react';
import UserList from './components/Users/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((currentUsers) => {
      return [...currentUsers, newUser];
    });
  };

  return (
    <div className='App'>
      <Card>
        <UserInput onSaveUserData={handleAddUser} />
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;

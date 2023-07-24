import React, { useState } from "react";

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 22}
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();


  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser)
  };

  

  return (
    <div>
      <h2>User Search</h2>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        <p>{user && user.name}</p>
        <p>{user && user.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
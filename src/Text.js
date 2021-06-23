import React, { useContext } from 'react';
import { UserContext } from './context';

const Text = () => {
  const {user, setUser} = useContext(UserContext)

  return <p onClick={user.name === 'Taesu' ? () => setUser({name: 'Kim'}) : () => setUser({name: 'Taesu'})}>{user.name}</p>
}

export default Text;

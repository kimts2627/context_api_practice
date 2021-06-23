import React, { useState } from 'react';

// const user = {
//   name: 'Taesu'
// }

export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'Taesu',
  })

  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export default UserContextProvider;
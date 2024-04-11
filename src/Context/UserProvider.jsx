import React, { createContext } from 'react'
export const UserContext = createContext()

function UserProvider({children}) {
    const users =[
        { id: 1, name: "mohammad rasoul" },
        { id: 2, name: "mohammad" },
        { id: 3, name: "ali" },
        { id: 4, name: "karim" },
    ]
  return (
    <UserContext.Provider value={users}>
         {children}
    </UserContext.Provider>
  )
}

export default UserProvider
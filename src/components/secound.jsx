import React, { useContext } from 'react'
import {UserContext} from "../Context/UserProvider"
function secound() {
    const result = useContext(UserContext)
    console.log(result);
    return (
        <div>
            {result.map((item) =>{
               return <p key={item.id}>{item.name}</p>
            })}
        </div>
    )
}

export default secound
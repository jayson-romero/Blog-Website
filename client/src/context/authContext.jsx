import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=> {
   const [ currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("auth_token")) || null)



   const login = async(inputs) => {
      try {
         const res = await axios.post("http://localhost:8800/api/auth/login", inputs)
         setCurrentUser(res.data)
      } catch (error) {
         throw error.response.data
      }
     
   };

   const logout = async(inputs) => {
      try {
         await axios.post("http://localhost:8800/api/auth/logout", inputs)
         setCurrentUser(null)
      } catch (error) {
         console.log(error)
      }
     
   };

   // Load token from local storage on component mount
   useEffect(() => {
      localStorage.setItem("auth_token", JSON.stringify(currentUser))
   }, [currentUser])

   return (
      <AuthContext.Provider value={{currentUser, login, logout}}>
         {children}
      </AuthContext.Provider>
   )

}
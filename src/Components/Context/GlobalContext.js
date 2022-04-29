
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//  SET INITIAL STATE
const InitialState = {
  USERS: [
    {
      id: 1,
      ProductName: 'Iphone',
      Catogery: 'Mobile',
      Image:'https://m.media-amazon.com/images/I/71xd-yy5sML._AC_UY327_FMwebp_QL65_.jpg',
      Price: '21000',
      About: 'its Good' 
    },
    {
      id: 2,
      ProductName: ' Walkaroo',
      Catogery: 'Leather',
      Image:'https://m.media-amazon.com/images/I/71AX8jLxnzL._AC_UL480_FMwebp_QL65_.jpg',
      Price: '21777',
      About: '   me ladki 2  L.KM'
    }
  ]
}
//CREATE GLOBAL CONTEXT
export const GlobalContext=createContext(InitialState);
//PROVIDER COMPONENT
export const GlobalProvider=({children})=>{
  const [state,dispatch]=useReducer(AppReducer,InitialState)
    const DeleteUser=(id)=>{
        console.log(id);
        dispatch({
            type:"DELETE_USER",
            payload:id
        })
    }
    const AddUser=(userData)=>{
      dispatch({
          type:"ADD_USER",
          payload:userData
      })
    }

  const EditUser=(EditData)=>{
    dispatch({
      type:"EDIT_USER",
      payload:EditData
  })

  }

  return (
      <GlobalContext.Provider value={{
        Users:  state.USERS,
        DeleteUser,
        AddUser,
        EditUser
      }}>
        {children}
      </GlobalContext.Provider>
  )
}



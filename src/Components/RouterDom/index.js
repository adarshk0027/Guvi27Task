import { Routes, Route } from 'react-router-dom'
import React from 'react'
import CreateUserForm from '../CreateUserForm'
import ListProduct from '../ListProduct'
import { GlobalProvider } from '../Context/GlobalContext'
import EditProducts from '../EditProducts'
function RouterConfig () {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<ListProduct></ListProduct>}></Route>
        <Route path='home' element={<ListProduct></ListProduct>}></Route>
        <Route path='create-user' element={<CreateUserForm></CreateUserForm>}></Route>
        <Route path='edit:Id' element={<EditProducts></EditProducts>}></Route>
        {/* <Route path='viewprofile:Id' element={<Viewprofile></Viewprofile>}></Route>
        <Route path='profileChange:Id' element={<EditProfile></EditProfile>}></Route> */}
        </Routes>
    </GlobalProvider>
  )
}

export default RouterConfig

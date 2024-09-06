import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layout/Layout'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import Registration from '../Pages/Registration/Registration'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRouter
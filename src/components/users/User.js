import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const User = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })
  const { name, username, email } = user
  const { id } = useParams()
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const rs = await axios.get(
      `https://6059624ab11aba001745c06f.mockapi.io/users/${id}`
    )
    setUser(rs.data)
  }
  return (
    <div className='container py-4'>
      <Link className='btn btn-primary' to='/'>
        back to Home
      </Link>
      <h1 className='display-4'>User Id: {id}</h1>
      <hr />
      <ul className='list-group w-50 align-center'>
        <li className='list-group-item'>name: {user.name}</li>
        <li className='list-group-item'>user name: {user.username}</li>
        <li className='list-group-item'>email: {user.email}</li>
      </ul>
    </div>
  )
}
export default User

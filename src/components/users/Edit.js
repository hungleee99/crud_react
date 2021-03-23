import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })
  let history = useHistory()
  const { name, username, email } = user
  const loadUser = async () => {
    const rs = await axios.get(
      `https://6059624ab11aba001745c06f.mockapi.io/users/${id}`
    )
    setUser(rs.data)
  }
  useEffect(() => {
    loadUser()
  }, [])
  const { id } = useParams()
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://6059624ab11aba001745c06f.mockapi.io/users/${id}`,
      user
    )
    history.push('/')
  }
  return (
    <div className='container'>
      <h2 className='text-center mb-4'>Add A User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <h5>Name</h5>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <h5>User name</h5>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className='form-group'>
          <h5>Email</h5>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email'
            placeholder='email'
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
export default Edit

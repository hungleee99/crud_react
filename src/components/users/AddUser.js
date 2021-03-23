import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {
  let history = useHistory()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })
  const { name, username, email } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://6059624ab11aba001745c06f.mockapi.io/users',user)
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
export default AddUser

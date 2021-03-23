import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [users, setUser] = useState([])
  useEffect(() => {
    loadusers()
  }, [])

  const loadusers = async () => {
    const rs = await axios.get(
      'https://6059624ab11aba001745c06f.mockapi.io/users'
    )
    setUser(rs.data.reverse())
  }
  const deleteUser = async (id) => {
    await axios.delete(
      `https://6059624ab11aba001745c06f.mockapi.io/users/${id}`
    )
    loadusers()
  }
  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .slice(0)
            .reverse()
            .map((user, index) => (
              <tr>
                <th scope='row'>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className='btn btn-info mr-2' exact to={`/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className='btn btn-primary mr-2'
                    exact
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className='btn btn-danger mr-2'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default Home

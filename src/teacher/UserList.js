import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
function UserList() {
  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true)
  const Navigate = useNavigate()
  //onload
  useEffect(() => {
    getUser()
  }, [])

  let handelDelete = async (id) => {
    try {
      const confirmdate = window.confirm(
        'Are You Sure You Want To Delete Data ?',
      )
      if (confirmdate) {
        await axios.delete(
          `https://6397045686d04c76338811e9.mockapi.io/users/${id}`,
        )
        getUser()
      }
    } catch (error) {
      console.log(error)
    }
  }

  let getUser = async () => {
    try {
      const users = await axios.get(
        'https://6397045686d04c76338811e9.mockapi.io/users',
      )
      setUserlist(users.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
        <Link
          to="/portal/CreateUser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> create student
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          {isLoading ? (
            <h1>isLoading</h1>
          ) : (
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>COUNTER</th>
                    <th>STATE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>COUNTER</th>
                    <th>STATE</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userList.map((user, id) => {
                    return (
                      <tr key={id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <th>
                          <Link
                            to={`/portal/user-view/${user.id}`}
                            className="btn btn-primary mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/useredit/${user.id}`}
                            className="btn btn-info mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handelDelete(user.id)}
                            className="btn btn-danger mr-1"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UserList

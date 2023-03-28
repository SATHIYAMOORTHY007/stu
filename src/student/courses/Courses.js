import React from 'react'
import courses from './courses.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Courses() {
  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    getUser()
  }, [])

  let getUser = async () => {
    try {
      const users = await axios.get(
        'https://6397045686d04c76338811e9.mockapi.io/users',
      )
      setUserlist(users.data)
      console.log(users.List)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>available courses</h1>
      <div class="container">
        <div class="row">
          {isLoading
            ? 'Loading'
            : userList.map((data, id) => {
                return (
                  <div class="card">
                    <img class="card-img-top" alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">{data.name}</h5>
                      <p class="card-text">{data.file}</p>
                      <a href="#" class="btn btn-primary">
                        Take a course
                      </a>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default Courses

import React, { useEffect } from 'react'
import { Formik, useFormik, onChange } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserList from './UserList'
function UserEdit() {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getUserDate()
  }, [])

  let getUserDate = async () => {
    try {
      const user = await axios.get(
        `https://6397045686d04c76338811e9.mockapi.io/users/${params.id}`,
      )
      myformik.setValues(user.data)
    } catch (error) {
      console.log(error)
    }
  }

  const myformik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      state: '',
      city: '',
    },
    validate: (values) => {
      let errors = {}
      if (!values.name) {
        errors.name = 'please enter a username'
      } else if (values.name.length < 3) {
        errors.name = 'greater than 3'
      } else if (values.name.length > 15) {
        errors.name = 'less than 15'
      }
      if (!values.email) {
        errors.email = 'please enter email'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }

      if (!values.country) {
        errors.country = 'please select country'
      }
      if (!values.state) {
        errors.state = 'please select state'
      }
      if (!values.city) {
        errors.city = 'please select city'
      }
      return errors
    },
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const user = await axios.put(
          `https://6397045686d04c76338811e9.mockapi.io/users/${params.id}`,
          values,
        )
        setLoading(false)
        navigate(`/portal/user-list`)
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <div className="container">
      <h1>{params.id}</h1>
      <form onSubmit={myformik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={'text'}
              value={myformik.values.name}
              name="name"
              onChange={myformik.handleChange}
              className={`form-control ${
                myformik.errors.name ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>E-mail</label>
            <input
              type={'text'}
              name="email"
              onChange={myformik.handleChange}
              value={myformik.values.email}
              className={`form-control ${
                myformik.errors.email ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.email}</span>
          </div>

          <div className="col-lg-4">
            <label>Country</label>
            <select
              name="country"
              value={myformik.values.country}
              className={`form-control ${
                myformik.errors.country ? 'is-invalid' : 'is-valid'
              }`}
              onChange={myformik.handleChange}
            >
              <option>--Select--</option>
              <option value={'IN'}>India</option>
              <option value={'USA'}>America</option>
            </select>
            <span style={{ color: 'red' }}>{myformik.errors.country}</span>
          </div>

          <div className="col-lg-4">
            <label>State</label>
            <select
              name="state"
              value={myformik.values.state}
              onChange={myformik.handleChange}
              className={`form-control ${
                myformik.errors.state ? 'is-invalid' : 'is-valid'
              }`}
            >
              <option value={''}>--Select--</option>
              <option value={'TN'}>TamilNadu</option>
              <option value={'PO'}>pondicheri</option>
            </select>
            <span style={{ color: 'red' }}>{myformik.errors.state}</span>
          </div>

          <div className="col-lg-4">
            <label>City</label>
            <select
              name="city"
              value={myformik.values.city}
              className={`form-control ${
                myformik.errors.city ? 'is-invalid' : 'is-valid'
              }`}
              onChange={myformik.handleChange}
            >
              <option value={''}>--Select--</option>
              <option value={'CH'}>chennai</option>
              <option value={'MA'}>madurai</option>
            </select>
            <span style={{ color: 'red' }}>{myformik.errors.city}</span>
          </div>

          <div className="col-lg-3">
            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? 'Update' : 'Update...'}
              className="btn mt-1 btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserEdit

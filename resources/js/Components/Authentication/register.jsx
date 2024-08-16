import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from '@inertiajs/react'; import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { api } from '../../lib/axios'
import { Formik } from 'formik'
import { useUser } from '../../lib/user'
import BadgeError from '../Badge/BadgeError'
import BadgeSuccess from '../Badge/BadgeSuccess'
import {ScaleLoader} from 'react-spinners'
import { set } from '../../lib/set'
import { countries } from '../../lib/countries'

const defaultValues = {
  firstName : "",
  lastName: "",
  email : "",
  mobile : "",
  profession: "",
  set : "",
  city : "",
  state : "",
  country : "",
  password : ""
}

const Register = () => {
  const { storeToken } = useUser();

  const [showPassword, setShowPassword] = useState(false);

  const register = useMutation( async values => {
    const { data } = await api.post("/register", values);
    return data;
  });

  const submitForm = (values) => {
    register.mutate(values, {
      onSuccess: (data) => {
        storeToken(data);
      }
    });
    console.log(values)
  }

  console.log(register.error);

  return (
      <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl space-y-8">
        <div>
          <h2 className="mt-6 text-center px-14 text-3xl md:text-6xl font-primary tracking-tight text-gray-900">
            Register as a Member.
          </h2>
        
        </div>
        <Formik
          initialValues={defaultValues} 
          onSubmit={(values) => submitForm(values)}
          >
          {({handleChange, handleSubmit, values}) => (
              <div className="mt-8 bg-yellow-400 p-5 md:p-10 m-5 md:m-0 rounded-lg space-y-6 font-montserrat" action="#" method="POST">
              {
                register.isError && (
                  <BadgeError message={register.error.response.data}/>
                )
              }
              {
                register.isSuccess && (
                  <BadgeSuccess message={"Registration Successful, Welcome!"}/>
                )
              }

              <div className="space-y-6 rounded-md shadow-sm">
                <div className='flex justify-between'>
                <div>
                  <label htmlFor="email-address" className="">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={values.firstName}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div><div>
                  <label htmlFor="email-address" className="">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={values.lastName}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    Email
                  </label>
                  <input
                    name="email"
                    value={values.email}
                    type="email"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    Mobile
                  </label>
                  <input
                    name="mobile"
                    value={values.mobile}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    Profession
                  </label>
                  <input
                    name="profession"
                    value={values.profession}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    City
                  </label>
                  <input
                    name="city"
                    value={values.city}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    State
                  </label>
                  <input
                    name="state"
                    value={values.state}
                    type="text"
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    Country
                  </label>
                  <select
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900">
                      <option>Select Country</option>
                    {
                        countries.map(country => (
                          <option value={country} key={country}>{country}</option>
                        ))
                    }
                </select>
                </div>
                <div>
                  <label htmlFor="email-address" className="">
                    Set
                  </label>
                  <select
                    name="set"
                    value={values.set}
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900">
                     <option>Select Set</option>

                      {
                        set.map(year => (
                          <option value={year} key={year}>{year}</option>
                        ))
                      }
                </select>
                </div>
                <div>
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    name="password"
                    value={values.password}
                    type="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center hidden md:block">
                  <input
                    name="remember-me"
                    type="checkbox"
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-700 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                {
                  register.isLoading ? (
                  <div className=''>
                      <ScaleLoader height={18} color='white'/>
                    </div>
                  ) : (
                    <div className='relative flex w-full justify-center'>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-yellow-800 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                      Register
                    </div>
                  )
                }
                </button>
              </div>
              <hr/>
              <div className='text-center text-yellow-900 font-bold'>
                <Link href="/login">
                  <a>Login as a member</a>
                </Link>
              </div>
            </div>
          )}
        </Formik>
      </div>
        </div>
  </>
  )
}

export default Register
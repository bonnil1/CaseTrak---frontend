import { useEffect, useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"

const Add = (props) => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const token = localStorage.getItem("authToken")
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/casefiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token 
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json()
        //console.log(data)
        const id = data._id
        navigate(`/casefiles/${id}`)
      }
    } catch (error){
      console.log("Could not create case file form", error)
    }
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div>
      {props.isLoggedIn ? 
          <React.Fragment>
          <h1 className='text-7xl font-bold text-center mt-10'>Add A New Casefile</h1>
          <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className='mt-20'>
            <label>Case Number: </label>
            <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
              name="case_number"
              placeholder="enter case number"
              onChange={handleChange}
            ></input>
            <label>Offense: </label>
            <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
              name="offense"
              placeholder="enter offense"
              onChange={handleChange}
            ></input>
            <label>Offense Date: </label>
            <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
              name="offense_date"
              placeholder="enter offense date"
              onChange={handleChange}
              ></input>
            <label>Request: </label>
            <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
              name="request"
              placeholder="enter request"
              onChange={handleChange}
            ></input>
            <label>Status: </label>
            <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
              name="status"
              placeholder="enter status"
              onChange={handleChange}
            ></input>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Submit</button>
          </form>
          </div>
          </React.Fragment>
      : 
      <h1 className='text-xl text-center mt-32'>Sign up / Log in to view case information.</h1>
      }
    </div>
  )
}

export default Add

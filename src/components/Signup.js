import { useState } from "react"

const Signup = (props) => {

  const [form, setForm] = useState(null)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = await props.handleSignUp(form)
  }

  return (
    <div>
      <h1 className='text-7xl font-bold text-center mt-10'>Sign Up Below</h1>
      <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className='mt-20'>
        <label>Username: </label>
        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 border-black'
          name="username"
          placeholder="enter username"
          onChange={handleChange}
        ></input>
        <label>Password: </label>
        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
          type="password"
          name="password"
          placeholder="enter password"
          onChange={handleChange}
        ></input>
        <label>Email: </label>
        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 border-black'
          name="email"
          placeholder="enter email"
          onChange={handleChange}
        ></input>
        <label>Unit: </label>
        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 border-black'
          name="unit"
          placeholder="enter unit"
          onChange={handleChange}
        ></input>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
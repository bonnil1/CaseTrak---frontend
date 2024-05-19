import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/casefiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      navigate('/')
    } catch (error){
      console.log("Could not create form", error)
    }
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <h1 className='text-8xl font-bold text-center mt-10'>Add A New Casefile</h1>
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
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Add

/*

useEffect(() => {
    const fetchForm = async () => {
        try {
          const response = await fetch(`http://localhost:4000/casefiles/new`);
          const html = await response.text()
          setForm(html);
        } catch (error) {
          console.log("Could not fetch form", error)
        }
    }
    fetchForm()
  }, [])

  return (
   
      <form onSubmit={handleSubmit}>
      <div dangerouslySetInnerHTML={{ __html: form }}></div>
      <input type="text" name="date" onChange={handleChange} />
      <input
        name="case_number"
        placeholder="enter case number"
        onChange={handleChange}
        ></input>
      <button type="submit">Submit</button>
    </form>
  )
*/
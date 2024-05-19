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
    <form onSubmit={handleSubmit}>
      <label>Case Number: </label>
      <input
        name="case_number"
        placeholder="enter case number"
        onChange={handleChange}
        ></input>
      <label>Offense: </label>
      <input
        name="offense"
        placeholder="enter offense"
        onChange={handleChange}
        ></input>
      <label>Offense Date: </label>
      <input
        name="offense_date"
        placeholder="enter offense date"
        onChange={handleChange}
        ></input>
      <label>Request: </label>
      <input
        name="request"
        placeholder="enter request"
        onChange={handleChange}
        ></input>
      <label>Status: </label>
      <input
        name="status"
        placeholder="enter status"
        onChange={handleChange}
        ></input>
      <button type="submit">Submit</button>
    </form>
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
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Evidence = ({getCase, id}) => {

    const navigate = useNavigate()
    const [addEvidence, setAddEvidence] = useState(false)
    const [formData, setFormData] = useState({})

    const handleAdd = () => {
        setAddEvidence(true)
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${process.env.CASE_TRAK_URL}/casefiles/${id}/evidence`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            getCase()
            //navigate(`/casefiles/${id}`)
        } catch (error) {
            console.log("Could not create evidence form.", error)
        }
    }

    return (
        <div>
            {addEvidence === true ? (
                <form onSubmit={handleSubmit} className='mt-10'>
                <h1 className='text-2xl font-bold text-center mb-5'>Add Evidence</h1>
                <label>Item Number: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="number"
                  placeholder="enter item number"
                  onChange={handleChange}
                ></input>
                <label>Type: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="type"
                  placeholder="enter evidence type"
                  onChange={handleChange}
                ></input>
                <label>Description: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="description"
                  placeholder="enter description"
                  onChange={handleChange}
                ></input>
                <label>Location: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="location"
                  placeholder="enter location"
                  onChange={handleChange}
                ></input>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                </form>
            ) : (
                <input type="button" value="(+) Evidence" onClick={handleAdd} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5'/>
            )}
        </div>
    )
}

export default Evidence
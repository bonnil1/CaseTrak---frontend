import { useState } from 'react'

const Investigator = ({getCase, id}) => {

    const [addInvestigator, setAddInvestigator] = useState(false)
    const [formData, setFormData] = useState({})
    const token = localStorage.getItem("authToken")

    const handleAdd = () => {
        setAddInvestigator(true)
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/casefiles/${id}/investigators`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token 
                },
                body: JSON.stringify(formData)
            })
            getCase()
        } catch (error) {
            console.log("Could not create investigator form.", error)
        }
    
    }

    return (
        <div>
            {addInvestigator === true ? (
                <form onSubmit={handleSubmit} className='mt-10 ml-5'>
                <h1 className='text-2xl font-bold text-center mb-5'>Add Investigator</h1>
                <label>Name: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="name"
                  placeholder="enter name"
                  onChange={handleChange}
                ></input>
                <label>Unit: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="unit"
                  placeholder="enter unit"
                  onChange={handleChange}
                ></input>
                <label>Contact Number: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="number"
                  placeholder="enter contact number"
                  onChange={handleChange}
                ></input>
                <label>Email: </label>
                <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                  name="email"
                  placeholder="enter email"
                  onChange={handleChange}
                ></input>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                </form>
            ) : (
                <input type="button" value="(+) Investigator" onClick={handleAdd} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
            )}
        </div>
    )
}

export default Investigator
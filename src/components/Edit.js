import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Edit = ({getCase, oneCase, id}) => {

    const navigate = useNavigate()
    const [form, setForm] = useState(oneCase)
    const [editing, setEditing] = useState(false)
    const token = localStorage.getItem("authToken")

    const updateCase = async (oneCase, id) => {
        console.log(oneCase)
        try {
            await fetch(`${process.env.REACT_APP_URL}/casefiles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                },
                body: JSON.stringify(oneCase)
            })
        } catch (error) {
            console.log("Failed to update casefile.")
        }
        getCase();
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        setEditing(false)
        e.preventDefault()
        updateCase(form, id)
    }

    return (
        <div>
            {editing === true ? (
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit}>
                    <h3 className='text-2xl text-bold mb-3'>Edit Casefile</h3>
                        <h3>Case Number: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="case_number"
                            value={form.case_number}
                            placeholder="enter case number"
                            onChange={handleChange}
                        ></input>

                        <h3>Offense: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="offense"
                            value={form.offense}
                            placeholder="enter offense"
                            onChange={handleChange}
                        ></input>

                        <h3>Offense Date: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="offense_date"
                            value={form.offense_date}
                            placeholder="enter offense date"
                            onChange={handleChange}
                        ></input>

                        <h3>Request: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="request"
                            value={form.request}
                            placeholder="enter request"
                            onChange={handleChange}
                        ></input>

                        <h3>Status: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="status"
                            value={form.status}
                            placeholder="enter status"
                            onChange={handleChange}
                        ></input>

                        <button type="submit" className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border border-gray rounded'>Submit</button> 
                    </form>
                </div>
            ) : (
                <input type="button" value="Edit" onClick={handleEdit} className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-4 border border-gray rounded mr-5'/>
            )}
        </div>
    )
}

export default Edit
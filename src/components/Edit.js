import { useState } from "react"

const Edit = ({oneCase, id}) => {

    const [form, setForm] = useState(oneCase)
    const [editing, setEditing] = useState(false)

    const updateCase = async(oneCase, id) => {
        console.log(oneCase)
        try {
            await fetch(`http://localhost:4000/casefiles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(oneCase)
            })
        } catch (error) {
            console.log("Failed to update casefile.")
        }
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        setEditing(false)
        e.preventDefault()
        updateCase(form, id)
    }

    return (
        <div>
            {editing === true ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3>Case Number: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="case_number"
                            value={oneCase.case_number}
                            placeholder="enter case number"
                            onChange={handleChange}
                        ></input>

                        <h3>Offense: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="offense"
                            value={oneCase.offense}
                            placeholder="enter offense"
                            onChange={handleChange}
                        ></input>

                        <h3>Offense Date: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="offense_date"
                            value={oneCase.offense_date}
                            placeholder="enter offense date"
                            onChange={handleChange}
                        ></input>

                        <h3>Request: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="request"
                            value={oneCase.request}
                            placeholder="enter request"
                            onChange={handleChange}
                        ></input>

                        <h3>Status: </h3>
                        <input className='appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'
                            name="status"
                            value={oneCase.status}
                            placeholder="enter status"
                            onChange={handleChange}
                        ></input>

                        <button type="submit">Submit</button> 
                    </form>
                </div>
            ) : (
                <input type="button" value="Edit" onClick={handleEdit}/>
            )}
        </div>
    )
}

export default Edit
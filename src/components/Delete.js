import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Delete = ({id}) => {

    const navigate = useNavigate()

    const deleteCase = async () => {
        await fetch(`${process.env.REACT_APP_URL}/casefiles/${id}`, {
            method: "DELETE",
        })
    }

    const removeCase = (e) => {
        e.preventDefault()
        deleteCase(id)
        navigate('/')
    }

    return (
        <div>
            <input type="button" value="Delete" onClick={removeCase} className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border border-gray rounded'/>
        </div>
    )
}

export default Delete
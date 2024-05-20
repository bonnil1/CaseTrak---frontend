import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Delete = ({id}) => {

    const navigate = useNavigate()

    const deleteCase = async () => {
        await fetch(`http://localhost:4000/casefiles/${id}`, {
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
            <input type="button" value="Delete" onClick={removeCase}/>
        </div>
    )
}

export default Delete
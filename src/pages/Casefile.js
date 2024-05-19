import { useState, useEffect } from 'react';
import Home from './Home';

const Casefile = (id) => {

    const [oneCase, setOneCase] = useState(null)

    const getCase = async() => {
        try {
            const response = await fetch(`http://localhost:4000/casefiles/${id}`)
            const data = await response.json()
            setOneCase(data.data)
        } catch (error){
            console.log("Cannot fetch case detail.")
        }
    }

    return (
        <div>
            <h1>Case Number: {oneCase.case_number}</h1>
            <h1>Request: {oneCase.request}</h1>
            <h1>Status: {oneCase.status}</h1>
        </div>
    )
}

export default Casefile
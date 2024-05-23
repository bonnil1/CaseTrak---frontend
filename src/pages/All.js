import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const All = () => {

    const [casefiles, setCasefiles] = useState([])

    const fetchCasefiles = async () => {
        try {
            const response = await fetch(`http://localhost:4000/casefiles/all`)
            const data = await response.json()
            setCasefiles(data)
            console.log(data)
        } catch (error) {
            console.log('Failed to fetch casefiles', error)
        }
    }

    useEffect(() => {
        fetchCasefiles()
    }, [])

    return (
        <div>
            {casefiles.map((casefile) => (
                <div key={casefile._id}>
                    <Link to={`/casefiles/${casefile._id}`}>Case Number: {casefile.case_number}</Link>
                </div>
            ))}
        </div>
    )
}

export default All
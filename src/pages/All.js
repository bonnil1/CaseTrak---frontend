import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const All = () => {

    const [casefiles, setCasefiles] = useState([])

    const fetchCasefiles = async () => {
        try {
            const response = await fetch(`${process.env.CASE_TRAK_URL}/casefiles/all`)
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
            <h1 className='text-8xl font-bold text-center mt-10'>Viewing All Casefiles</h1>
            {casefiles.map((casefile) => (
                <div key={casefile._id} className='text-4xl text-center mt-10 underline decoration-sky-500'>
                    <Link to={`/casefiles/${casefile._id}`}>Case Number: {casefile.case_number}</Link>
                </div>
            ))}
        </div>
    )
}

export default All
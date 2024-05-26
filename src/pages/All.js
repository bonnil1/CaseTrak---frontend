import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const All = (props) => {

    const [casefiles, setCasefiles] = useState([])

    const fetchCasefiles = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/casefiles/all`)
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
            {props.isLoggedIn ? 
            <React.Fragment>
                <h1 className='text-7xl font-bold text-center mt-10'>Viewing All Casefiles</h1>
                {casefiles.map((casefile) => (
                    <div key={casefile._id} className='text-2xl text-center mt-10 underline decoration-sky-500'>
                        <Link to={`/casefiles/${casefile._id}`}>Case Number: {casefile.case_number}</Link>
                    </div>
                ))}
            </React.Fragment>
                : 
            <h1 className='text-xl text-center mt-32'>Sign up / Log in to view case information.</h1>
        }
        </div>
    )
}

export default All
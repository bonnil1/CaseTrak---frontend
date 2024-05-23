import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Home = (props) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [oneCase, setOneCase] = useState(null)
    const [response, setResponse] = useState(true)

    const fetchCasefile = async () => {
        try {
            const response = await fetch(`http://localhost:4000/casefiles/?case_number=${search.case_number}`);
            console.log(search.case_number)
            if (!response.ok) {
                throw new Error("Cannot fetch casefile.")
            }
            const data = await response.json()
                console.log(data)
            const id = data._id
                console.log(data._id)
            setOneCase(data)
            navigate(`/casefiles/${id}`)
        } catch (error) {
            setResponse(false)
            console.error(`Cannot fetch casefile.`, error)
        }
    }

    const handleChange = (e) => {
        console.log("entering search...")
        setSearch({...search, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        console.log("search submitted")
        e.preventDefault()
        fetchCasefile(search.case_number)
    }

    return (
        <div>
            <h1 className='text-8xl font-bold text-center mt-10'>Welcome to CaseTrack</h1>
            <p className='text-lg text-center mt-10'>Fulfilling all your case file tracking needs.</p>
            
            <div className='text-center mt-32'>
                <p>Click here to</p>
                <Link to={'/casefiles/new'} className='text-4xl' style={{margin: 'auto'}}>Add a Casefile</Link>
            </div>
            
            <h1 className='text-4xl text-center mt-20'>Search for a Casefile</h1>
            <form onSubmit={handleSubmit} className='text-center mt-10'>
                <input className='appearance-none w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200'
                    name="case_number"
                    placeholder="enter case number"
                    onChange={handleChange}
                ></input>
                <button type="submit" className='ml-5 border border-black py-2 px-3 rounded hover:bg-blue-200'>Submit</button>
            </form>
            {response === false ? (
                <h1 className='text-center text-red-500'>No case file with that case number exists.</h1>
            ) : null}
            <div className='text-center mt-20'>
                <p>Click here to</p>
                <Link to={'/casefiles'} className='text-4xl' style={{margin: 'auto'}}>See All Casefiles</Link>
            </div>
        </div>
    )
}

export default Home

//include if logged in, else ... logic later ^^
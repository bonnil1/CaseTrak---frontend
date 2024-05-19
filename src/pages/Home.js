import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Home = (props) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")

    const [oneCase, setOneCase] = useState(null)

    //const URL = `http://localhost:3000/casefiles/${id}`

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
            <h1 className='text-4xl font-bold text-center mb-4'>Welcome to CaseTrack</h1>
            

            <Link to={'/casefiles/new'}>Add a Casefile</Link>
            
            <h1>Search for a Casefile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="case_number"
                    placeholder="enter case number"
                    onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home

//include if logged in, else ... logic later ^^
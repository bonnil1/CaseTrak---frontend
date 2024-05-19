import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Casefile = () => {
    const { id } = useParams();
    const [oneCase, setOneCase] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCase = async () => {
            try {
                const response = await fetch(`http://localhost:4000/casefiles/${id}`);
                const data = await response.json();
                console.log(data)
                setOneCase(data);
                setLoading(false); 
            } catch (error) {
                console.log("Cannot fetch case detail.", error);
                setLoading(false); 
            }
        };

        getCase();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {oneCase && (
                <div>
                    <h1 className='text-8xl font-bold text-center mt-10'>Showing Casefile</h1>
                    
                    <h3>Case Number: </h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.case_number}
                    </h3>

                    <h3>Offense: </h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.offense}
                    </h3>

                    <h3>Offense Date: </h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.offense_date}
                    </h3>

                    <h3>Request: </h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.request}
                    </h3>

                    <h3>Status: </h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.status}
                    </h3>

                    <h3>Date Created:</h3>
                    <h3 className='appearance-none block w-2/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.createdAt}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Casefile;
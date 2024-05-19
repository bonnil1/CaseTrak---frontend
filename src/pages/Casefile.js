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
                    <h1 className='text-1xl font-bold ml-5'>Case Number: {oneCase.case_number}</h1>
                    <h3>Offense: {oneCase.offense}</h3>
                    <h3>Offense Date: {oneCase.offense_date}</h3>
                    <h3>Request: {oneCase.request}</h3>
                    <h3>Status: {oneCase.status}</h3>
                </div>
            )}
        </div>
    );
};

export default Casefile;
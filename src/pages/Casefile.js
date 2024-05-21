import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import Evidence from '../components/Evidence';

const Casefile = () => {
    const { id } = useParams();
    const [oneCase, setOneCase] = useState(null);
    const [evidence, setEvidence] = useState(null)
    const [loading, setLoading] = useState(true);

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
/*
    const getEvidence = async () => {
        try {
            const response = await fetch(`http://localhost:4000/casefiles/${id}/evidence`);
            const data = await response.json()
            console.log(data)
            setEvidence(data)
        } catch (error) {
            console.log("Cannot fetch evidence", error)
        }
    }
*/
    useEffect(() => {
        getCase();
        //getEvidence();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {oneCase && (
                <div>
                    <h1 className='text-8xl font-bold text-center mt-10'>Showing Casefile</h1>
                    <div className="flex flex-col items-center mt-20">

                        <h3>Case Number: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.case_number}
                        </h3>

                        <h3>Offense: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.offense}
                        </h3>

                        <h3>Offense Date: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.offense_date}
                        </h3>

                        <h3>Request: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.request}
                        </h3>

                        <h3>Status: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.status}
                        </h3>

                        <h3>Date Created:</h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {oneCase.createdAt}
                        </h3>
                        <Edit getCase={getCase} oneCase={oneCase} id={id}/>
                        <Delete id={id}/>
                        <div className='mt-5'><Evidence getCase={getCase} id={id} /></div>
                    </div>

                {oneCase.evidence.map((ev, index) => (
                    
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center mt-10">
                            <h3>Item Number: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.number}
                            </h3>

                            <h3>Type: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.type}
                            </h3>

                            <h3>Description: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.description}
                            </h3>

                            <h3>Location: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.location}
                            </h3>
                            </div>
                        </React.Fragment>
                ))}
                </div>
            )}
        </div>
    );
};

export default Casefile;

/*
{ evidence && (
                oneCase.evidence.map((ev, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center mt-10">
                            <h3>Item Number: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.number}
                            </h3>

                            <h3>Type: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.type}
                            </h3>

                            <h3>Description: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.description}
                            </h3>

                            <h3>Location: </h3>
                            <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {ev.location}
                            </h3>
                            </div>
                        </React.Fragment>
                    )
                })
            )}
*/
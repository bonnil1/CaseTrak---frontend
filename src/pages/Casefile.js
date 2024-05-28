import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import Evidence from '../components/Evidence';
import Investigator from '../components/Investigator';
import File from '../components/File';
//import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
//import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Casefile = (props) => {
    const { id } = useParams();
    const [oneCase, setOneCase] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCase = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/casefiles/${id}`);
            const data = await response.json();
            console.log(data)
            setOneCase(data);
            setLoading(false); 
        } catch (error) {
            console.log("Cannot fetch case detail.", error);
            setLoading(false); 
        }
    };

    useEffect(() => {
        getCase();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
    <div className="col-span-1">

      {oneCase && (
        <div>
            <h1 className='text-8xl font-bold text-center mt-10'>Showing Casefile</h1>
            <div className="flex flex-col items-center mt-10">
            <div className='flex mb-5'>
              <Edit getCase={getCase} oneCase={oneCase} id={id}/>
              <Delete id={id}/>
            </div>
            <h3>Case Number: </h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {oneCase.case_number}
                </h3>

                <h3>Offense: </h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {oneCase.offense}
                </h3>

                <h3>Offense Date: </h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {oneCase.offense_date}
                </h3>

                <h3>Request: </h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {oneCase.request}
                </h3>

                <h3>Status: </h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {oneCase.status}
                </h3>

                <h3>Date Created:</h3>
                <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                    {new Date(oneCase.createdAt).toLocaleDateString()}
                </h3>

                <div className='flex mt-5'>
                    <Evidence getCase={getCase} id={id} />
                    <Investigator getCase={getCase} id={id} />
                </div>         
            </div>
        </div>
      )}
    </div>
    <div className="col-span-1">
  
        <div>
        {oneCase && oneCase.evidence.length > 0 && (
          <React.Fragment>
            <h1 className='text-2xl text-bold text-center mt-5'>Evidence Item(s):</h1>
            {oneCase.evidence.map((ev, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center mt-5">
                <h3>Item Number: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {ev.number}
                    </h3>

                    <h3>Type: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {ev.type}
                    </h3>

                    <h3>Description: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {ev.description}
                    </h3>

                    <h3>Location: </h3>                                
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {ev.location}
                    </h3>
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
        </div>
    </div>
    <div className="col-span-1">

        <div>
        {oneCase && oneCase.investigator.length > 0 && (
          <React.Fragment>
            <h1 className='text-2xl text-bold text-center mt-5'>Requesting Investigator(s):</h1>
            {oneCase.investigator.map((inv, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center mt-5">
                <h3>Name: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                            {inv.name}
                    </h3>

                    <h3>Unit: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {inv.unit}
                    </h3>

                    <h3>Contact Number: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {inv.number}
                    </h3>

                    <h3>Email: </h3>
                    <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                        {inv.email}
                    </h3>
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
        </div>
    </div>
  </div>

    )
}
export default Casefile;
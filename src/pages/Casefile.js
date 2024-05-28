import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import Evidence from '../components/Evidence';
import Investigator from '../components/Investigator';
import File from '../components/File';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Casefile = (props) => {
    const { id } = useParams();
    const [oneCase, setOneCase] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCase = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/casefiles/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
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
        <div> 
        {props.isLoggedIn ? (
        <React.Fragment>
        {oneCase && (
            <div>
                <h1 className='text-7xl font-bold text-center mt-10'>Showing Casefile</h1>
                <div className="flex flex-col items-center mt-10">
                <div className='flex mb-5'>
                    <Edit getCase={getCase} oneCase={oneCase} id={id}/>
                    <Delete id={id}/>
                </div>
                    <h3>Case Number: </h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.case_number}
                    </h3>
    
                    <h3>Offense: </h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.offense}
                    </h3>
    
                    <h3>Offense Date: </h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.offense_date}
                    </h3>
    
                    <h3>Request: </h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.request}
                    </h3>
    
                    <h3>Status: </h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {oneCase.status}
                    </h3>
    
                    <h3>Date Created:</h3>
                    <h3 className='appearance-none block w-60 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                        {new Date(oneCase.createdAt).toLocaleDateString()}
                    </h3>

                    <div className='flex mt-2'>
                        <File />
                    </div>
    
                    <div className='flex mt-5 mb-10'>
                        <Evidence getCase={getCase} id={id} />
                        <Investigator getCase={getCase} id={id} />
                    </div>
                    </div>
    <div className='text-center'> 
    
    <Menu as="div" className="relative inline-block text-right mb-96 mr-5">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-stone-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-stone-400">
            Evidence(s): {oneCase.evidence.length}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
        </div>

        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
        <MenuItems className="absolute z-10 mt-2 w-96 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-scroll">
            <div className="py-1 h-96 overflow-y-scroll">
                <MenuItem>
                {({ focus }) => (
                    <p>
                        {oneCase && oneCase.evidence.length > 0 && (
                        <React.Fragment>
                            {oneCase.evidence.map((ev, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center mt-3 border border-blue-500 rounded-lg">
                                    <h3 className='mt-2'>Item Number: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {ev.number}
                                    </h3>

                                    <h3>Type: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {ev.type}
                                    </h3>

                                    <h3>Description: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {ev.description}
                                    </h3>

                                    <h3>Location: </h3>                                
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {ev.location}
                                    </h3>
                                    
                                </div>
                            </React.Fragment>
                            ))}
                        </React.Fragment>
                        )}
                    </p>
                )}
                </MenuItem>
            </div>
            </MenuItems>
        </Transition>
    </Menu>
 
    <Menu as="div" className="relative inline-block text-right mb-96">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-stone-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-stone-400">
            Investigator(s): {oneCase.investigator.length}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
        </div>

        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
        <MenuItems className="absolute z-10 mt-2 w-96 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-scroll">
            <div className="py-1 h-96 overflow-y-scroll">
                <MenuItem>
                {({ focus }) => (
                    <p> 
                        {oneCase.investigator.length > 0 && (
                        <React.Fragment>
                            {oneCase.investigator.map((inv, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center mt-3 border border-blue-500 rounded-lg">
                                    <h3 className='mt-2'>Name: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {inv.name}
                                    </h3>
                
                                    <h3>Unit: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {inv.unit}
                                    </h3>
                
                                    <h3>Contact Number: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {inv.number}
                                    </h3>
                
                                    <h3>Email: </h3>
                                    <h3 className='appearance-none block text-left w-1/2 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2 overflow-scroll'>
                                        {inv.email}
                                    </h3>
                                    </div>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                        )}
                    </p>
                )}
                </MenuItem>
            </div>
            </MenuItems>
        </Transition>
    </Menu>
    </div>
            </div>
        )}
        </React.Fragment>
        ) : 
        <div>
            <h1 className='text-7xl font-bold text-center mt-10'>Welcome to CaseTrack</h1>
            <p className='text-lg text-center mt-10'>Fulfilling all your case file tracking needs.</p>
            <h1 className='text-xl text-center mt-32'>Sign up / Log in to view case information.</h1>
        </div>
        }
    </div>
    )
}
export default Casefile;
<div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
            {oneCase.evidence.length > 0 && (
            <React.Fragment>
                <Accordion style={{ width: '50%', background: '#bfdbfe'}}>
                    <AccordionPanel>
                        <AccordionTitle><h1 className='text-2xl mt-5'>Evidence Item(s):</h1></AccordionTitle>
                        <AccordionContent style={{ background: '#f5f5f5' }}>
                {oneCase.evidence.map((ev, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center mt-5">
                        <h3>Item Number: </h3>
                        <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {ev.number}
                        </h3>
    
                        <h3>Type: </h3>
                        <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {ev.type}
                        </h3>
    
                        <h3>Description: </h3>
                        <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {ev.description}
                        </h3>
    
                        <h3>Location: </h3>                                
                        <h3 className='appearance-none block w-1/3 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {ev.location}
                        </h3>
                        </div>
                    </React.Fragment>
                ))} 
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>    
            </React.Fragment>
            )}
            </div>
 
            {oneCase.investigator.length > 0 && (
            <React.Fragment>
                <h1 className='text-2xl text-bold text-center mt-5'>Requesting Investigator(s):</h1>
                {oneCase.investigator.map((inv, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center mt-5">
                        <h3>Name: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                                {inv.name}
                        </h3>
    
                        <h3>Unit: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {inv.unit}
                        </h3>
    
                        <h3>Contact Number: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {inv.number}
                        </h3>
    
                        <h3>Email: </h3>
                        <h3 className='appearance-none block w-1/6 bg-blue-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100 mt-2'>
                            {inv.email}
                        </h3>
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
            )}
</div>

 
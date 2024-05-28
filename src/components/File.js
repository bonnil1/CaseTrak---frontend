import React from 'react'
import { useState } from 'react'
import AWS from 'aws-sdk'

const File = () => {

    const [file, setFile] = useState(null)
    const [url, setURL] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
    }

    const handleUpload = async () => {

        const S3_BUCKET = 'casetrak-react-app'
        const REGION = 'us-west-1'

        AWS.config.update({
            //accessKeyId: 
            //secretAccessKey: 
        });

        const s3 = new AWS.S3({
            params: {Bucket: S3_BUCKET},
            region: REGION,
        });

        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
            //ACL: 'public-read' // Set object ACL to allow public access
        };

        var upload = s3
            .putObject(params)
            .on("httpUploadProgress", (evt) => {
                console.log(
                "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
                );
            })
            .promise();

            await upload.then((err, data) => {
            console.log(err);
            alert("File uploaded successfully.");
            });
    }

    return (
        <div className=''>
            <input type="file" name="file" onChange={handleChange}/>    
            <button onClick={handleUpload} className='bg-slate-800 hover:bg-slate-700 text-md text-white font-bold py-2 px-4'>Upload</button>
            {/*uploading && <p>Uploading...</p>*/}
        </div>
    )
}

export default File


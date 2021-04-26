import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null)

    const types = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4'];

    const [error, setError] = useState(null)

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        // console.log(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png, jpegm or jpeg) or a video file (mp4)');
        }
    }
    return (

        <form>
            <label>
                <input type='file' onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='output'> {error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}
export default UploadForm

import React, { useState } from 'react';
import AxiosApi from '../class/axiosApi';
import './css/register.css';

const UploadBlog = () => {
    const api = new AxiosApi();
    const [formdata, setFormdata] = useState({});
    const [authorAvatar, setauthorAvatar] = useState(null);
    const handleForm = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setauthorAvatar(e.target.files[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('authorAvatar', authorAvatar);
        Object.entries(formdata).forEach(([key, value]) => {
            data.append(key, value);
        })
        await api.post('/authors/create',
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit} encType='multipart/form-data' className='d-flex flex-column align-items-center gap-3 mt-3'>
                        <div className='d-flex flex-column'>
                            <label>Name</label>
                            <input onChange={handleForm} className='form-style' type='text' placeholder='Write Your Name' name='name' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Surname</label>
                            <input onChange={handleForm} className='form-style' type='text' placeholder='Write Your Surname' name='surname' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Email</label>
                            <input onChange={handleForm} className='form-style' type='email' placeholder='Write Your Email' name='email' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Password</label>
                            <input onChange={handleForm} className='form-style' type='password' placeholder='Write Your Password' name='password' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Date Of Birthday</label>
                            <input onChange={handleForm} className='form-style' type='text' placeholder='Write The Date Of Your Birthday' name='dateOfBirthday' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Avatar</label>
                            <input onChange={handleFile} className='form-style' type='file' placeholder='Upload The Image For Your Profile' name='authorAvatar' required />
                        </div>
                        <button className='form-style' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadBlog;

import React, { useState } from 'react';
import './css/uploadBlog.css';
import useSession from '../Hooks/useSession';
import AxiosApi from '../class/axiosApi';

const UploadBlog = () => {
    const api = new AxiosApi();
    const { session } = useSession();
    const [formdata, setFormdata] = useState({});
    const [blogImage, setBlogImage] = useState(null);
    const handleForm = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setBlogImage(e.target.files[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('blogImage', blogImage);
        Object.entries(formdata).forEach(([key, value]) => {
            data.append(key, value);
        })
        await api.post('/blogPost/create',
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
                            <label>Title</label>
                            <input className='form-style' onChange={handleForm} type='text' placeholder='Write The Title Of Your Post' name='title' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Category</label>
                            <select className='form-style' onChange={handleForm} name="category" required>
                                <option>Travel</option>
                                <option>Movie</option>
                                <option>Story</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Image</label>
                            <input className='form-style' onChange={handleFile} type='file' placeholder='Upload The Image For Your Blog' name='blogImage' required />
                        </div>
                        <button className='form-style' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadBlog;

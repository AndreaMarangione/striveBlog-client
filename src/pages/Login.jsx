import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosApi from '../class/axiosApi';
import './css/login.css';

const Login = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/register');
    }
    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = new AxiosApi();
        const response = await api.post('/login', JSON.stringify(form));
        if (response.statusText) {
            localStorage.setItem('token', JSON.stringify(response.data));
            navigate('/');
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center gap-3 mt-3'>
                        <div className='d-flex flex-column'>
                            <label>Email</label>
                            <input onChange={handleForm} className='form-style' type='email' placeholder='Write Your Email' name='email' required />
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Password</label>
                            <input onChange={handleForm} className='form-style' type='password' placeholder='Write Your Password' name='password' required />
                        </div>
                        <button className='form-style' type='submit'>Submit</button>
                        <div className='d-flex gap-2'>
                            <span>Don't have an account yet?</span>
                            <a className='link-register' onClick={handleNavigate}> sign in</a>
                        </div>
                    </form>
                    <a href="http://localhost:3030/auth/googleLogin">Login With Google</a>
                </div>
            </div>
        </div>
    )
}

export default Login;

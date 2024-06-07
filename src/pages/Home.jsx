import React, { useEffect, useState } from 'react';
import useSession from '../Hooks/useSession';
import AxiosApi from '../class/axiosApi';

const Home = () => {
    const { decodedSession, session } = useSession();
    const [blog, setBlog] = useState([]);
    const api = new AxiosApi();
    const getBlog = async () => {
        const response = await api.get('/blogPost');
        setBlog(response.data);
    }
    useEffect(() => {
        getBlog();
    }, [])
    console.log(blog);
    return (
        <>Ciao</>
    )
}

export default Home;

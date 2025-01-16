import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github(){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, []);

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github {data.followers}
        
        </div>
    )
}

export default Github;

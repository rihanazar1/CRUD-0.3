import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShowUsers = () => {

    const [data, setData] = useState([])

    const fetchUsers = async () => {
        await axios.get(`http://127.0.0.1:4000/user/showUsers`)

        .then((res) => {
            setData(res.data.showUsers)
            console.log(res.data.showUsers)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const navigate = useNavigate() 

    const deleteHandler = async (id) => {
        setData(data.filter((user) => user._id !== id))

        await axios.delete(`http://127.0.0.1:4000/user/deleteUser/${id}`)

        .then((res) => {
            console.log("User Deleted Succesfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    

  return (
    <>
        <div className='h-full flex justify-center items-center gap-x-4'>
            {
                data.map((userData, index) => {
                    return <div key={index} className='h-[20rem] w-[14rem] border border-black rounded-lg'>

                                <div className='flex justify-center mt-4'>
                                    <img className='h-[5rem] w-[5rem] rounded-full' src={userData.image} alt="" />
                                </div>

                                <h2 className='text-center mt-3'>{userData.name}</h2>

                                <div className='ml-1 mt-2'>
                                    <h2>Email : {userData.email}</h2>
                                    <h2>Age : {userData.age}</h2>
                                    <h2>Bio : {userData.bio}</h2>
                                </div>

                                <div className='mt-5 flex justify-around'>
                                    <button onClick={()=>navigate(`/update`)} className='py-1 px-3 border rounded border-black'>Edit</button>
                                    <button onClick={()=> deleteHandler(userData._id)} className='py-1 px-3 border rounded border-black'>Delete</button> 
                                </div>
                            </div>
                })
            }
        </div>
    </>
  )
}

export default ShowUsers
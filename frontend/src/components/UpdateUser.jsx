import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")

    const {id} = useParams()

    const fetchPreviousData = async () => {
        await axios.get(`http://127.0.0.1:4000/user/showUsers`)

        .then((res)=>{
            const user = res.data.showUsers.find(user => user._id == id)
            if(user){
                setImage(user.image)
                setName(user.name)
                setEmail(user.email)
                setAge(user.age)
                setBio(user.bio)
            }
        })
    }

    useEffect(() => {
        fetchPreviousData()
    }, [])
    

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://127.0.0.1:4000/user/updateUser/${id}`, {image, name, email, age, bio})

        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        setImage("")
        setName("")
        setEmail("")
        setAge("")
        setBio("")
    }

  return (
    <>
        <div className='h-full flex justify-center items-center'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='h-[16rem] w-[15rem] border border-black p-5'>
                <div>
                    <input 
                    className='border border-gray-400 mb-2'
                    type="text"
                    value={image}
                    onChange={(e)=>{
                        setImage(e.target.value)
                        console.log(e.target.value)
                    }}
                    placeholder='enter your image'
                     />
                </div>

                <div>
                    <input 
                    className='border border-gray-400 mb-2'
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                        console.log(e.target.value)
                    }}
                    placeholder='enter your name'
                     />
                </div>

                <div>
                    <input 
                    className='border border-gray-400 mb-2'
                    type="text"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }}
                    placeholder='enter your email'
                     />
                </div>

                <div>
                    <input 
                    className='border border-gray-400 mb-2'
                    type="number"
                    value={age}
                    onChange={(e)=>{
                        setAge(e.target.value)
                        console.log(e.target.value)
                    }}
                    placeholder='enter your age'
                     />
                </div>

                <div>
                    <input 
                    className='border border-gray-400 mb-2'
                    type="text"
                    value={bio}
                    onChange={(e)=>{
                        setBio(e.target.value)
                        console.log(e.target.value)
                    }}
                    placeholder='enter your bio'
                     />
                </div>
                <div className='w-full flex justify-center'>
                    <button className='border border-black mx-2 my-1 '>Update!</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default UpdateUser
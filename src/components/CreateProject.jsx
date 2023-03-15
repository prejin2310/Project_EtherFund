import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createProject } from '../services/blockchain'
import { setGlobalState, useGlobalState } from '../store'


const CreateProject = () => {
  const [createModal] =  useGlobalState('createModal')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [cost,setCost] = useState('')
  const [date,setDate] = useState('')
  const [imageURL,setImageURL] = useState('')


  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title ||  !description || !cost || !date || !imageURL) return
    
    const params ={
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    }

    await createProject(params)
    toast.success('Project created successfully, will reflect in 30sec.')
    onClose()
    
  }

  const onClose = () => {
    setGlobalState('createModal', 'scale-0')
    reset()
  }

  const reset = () => {
    setTitle('')
    setDescription('')
    setCost('')
    setDate('')
    setImageURL('')
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${createModal}`}>
        
        <div className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">

            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="font-semibold ">Create new Campaign</p>
                    <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="rounded-xl overflow-hidden h-[120px] w-[220px]">
                    <img
                        src={imageURL || 'https://i3.extraimage.xyz/pix/2023/03/13/uNV9A0.jpg'}
                        alt="Project Image"
                        className="h-full w-full object-cover cursor-pointer"
                    />
                    </div>
                </div>

                <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" type="text"
                    name="title"
                    placeholder="Project Title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required/>
                </div>

                <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" type="number"
                    step={0.1}
                    min={0.1}
                    name="cost"
                    placeholder="cost (ETH)" 
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                    required/>
                </div>

                <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" type="date"
                    name="date"
                    placeholder="Expires"
                    onChange={(e) => setDate(e.target.value)}
                    value={date} 
                    required/>
                </div>

                <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" type="text"
                    name="imageURL"
                    placeholder="Image URL" 
                    onChange={(e) => setImageURL(e.target.value)}
                    value={imageURL}
                    required/>
                </div>

                <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                    <textarea className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" type="text"
                    name="description"
                    placeholder="Story" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required/>
                </div>

                <button type='submit' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight  rounded-[7px] shadow-md hover:bg-green-700 mt-5'>Submit Project</button>

            </form>
        </div>
    
    </div>
  )
}

export default CreateProject
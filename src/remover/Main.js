import React, { useState } from 'react'

const Main = () => {

    const[image,setImage] = useState(null);
    const[bgRemove,setBgRemove] = useState(null)
    console.log(image);

    const handleClear = ()=>{
        setBgRemove(null);
    }

    const handleChange = ()=>{
        const apiKey = 'UkyRvwF8m9vbejWFf9YQsHCS'
        const url = 'https://api.remove.bg/v1.0/removebg'

        const formData = new FormData();
        formData.append('image_file',image,image.name)
        formData.append("size","auto");
        fetch(url,{
            method : 'POST',
            headers :{
                'x-Api-key' : apiKey
            },
            body : formData
        }).then((response)=>{
            response.blob().then((Blob)=>{
                const reader = new FileReader();
                reader.onloadend = ()=> setBgRemove(reader.result)
                reader.readAsDataURL(Blob)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          
          <h1 className="text-2xl font-bold ml-4">removebg</h1>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-4 text-gray-500 hover:text-gray-700">
            Remove Background
          </a>
          <a href="#" className="mr-4 text-gray-500 hover:text-gray-700">
            How to use
          </a>
          <a href="#" className="mr-4 text-gray-500 hover:text-gray-700">
            Tools & API
          </a>
          <a href="#" className="mr-4 text-gray-500 hover:text-gray-700">
            Pricing
          </a>
        </div>
      </div>
    <div className='flex justify-center my-10'>
        <div>
        <h2 className='text-lg font-semibold'>Remove Background Image</h2>
        <div className='my-4'>
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='file' onChange={(e)=>{setImage(e.target.files[0])}}/>
        </div>
        <button onClick={handleChange} className='px-4 py-2 rounded-md border cursor-pointer'>Remove Background</button>
        <button onClick={handleClear} className='px-4 py-2 rounded-md border cursor-pointer'>Clear</button>
        </div>
        <div>
            {
                bgRemove &&(
                    <img src={bgRemove}/>
                )
            }
        </div>
        <div>

        </div>
    </div>
    </div>
  )
}

export default Main
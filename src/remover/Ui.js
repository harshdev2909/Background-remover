import React, { useState } from 'react'

const Ui = () => {

    
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

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Upload an image to remove the background
        </h2>
        <form >
          <input type="file" accept="image/*" onChange={(e)=>{setImage(e.target.files[0])}} className="hidden" />
          <label onChange={(e)=>{setImage(e.target.files[0])}} htmlFor="imageUpload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Upload Image
          </label>
          <p className="mt-2 text-gray-500">or drop a file,</p>
          <p className="mt-1 text-gray-500">paste image or URL</p>
          <div className="mt-4">
            {image && (
              <img src={URL.createObjectURL(image)} alt="Uploaded image" className="w-48 h-48 rounded-md" />
            )}
          </div>
          <button onClick={handleChange} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2">No image? Try one of these::</h3>
        <div className="flex justify-center mt-4">
          <div className="flex flex-col items-center mr-4">
            <img src="https://placehold.co/200x200/f0f0f0/000000/&text=Image 1" alt="Image 1" className="w-24 h-24 rounded-md" />
            <p className="text-gray-500">Image 1</p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <img src="https://placehold.co/200x200/f0f0f0/000000/&text=Image 2" alt="Image 2" className="w-24 h-24 rounded-md" />
            <p className="text-gray-500">Image 2</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/200x200/f0f0f0/000000/&text=Image 3" alt="Image 3" className="w-24 h-24 rounded-md" />
            <p className="text-gray-500">Image 3</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>
          By uploading an image or URL you agree to our{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Terms of Service
          </a>
          . To learn more about how remove.bg handles your personal data, check our{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Ui

import Navbar from '@/components/Navbar'
import { CloudUpload, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import LoadingModal from '@/components/LoadingModal'
import { BACKEND_URL } from '@/configs/constants'
import axios from 'axios'
import AppointmentModal from '@/components/AppointmentModal'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function UploadImage() {
  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setImageFile(file)
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleUpload = async (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await axios.post(`${BACKEND_URL}/upload`, formData)
    console.log(res)
    navigate("/results", { state: { image: image, classifications: res.data.main, id: res.data.id } })
  }

  return (
    <>
      <Navbar isModalOpen={null} setIsModalOpen={null} />
      <div className='mt-8 py-16 px-3'>
        {image ? (
          <div className="flex flex-col items-center">
            <img src={image} alt="Selected" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
            <button onClick={() => setImage(null)} className="flex text-gray-500 py-3 border-2 border-gray-500 rounded-md mt-4 px-3">
              <TrashIcon className='' />
              Remove Image
            </button>
          </div>
        ) : (
          <div className="flex items-center px-32 justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        )}
        <div className='mt-4 px-32'>
          <button onClick={handleUpload} className='bg-medical-red flex justify-center items-center text-white text-lg shadow-lg hover:bg-red-700 rounded-md w-full py-4'>
            <CloudUpload className='mr-2' />
            Submit Image
          </button>
        </div>
      </div>
      <LoadingModal open={loading} onClose={() => setLoading(false)} />
    </>
  )
}


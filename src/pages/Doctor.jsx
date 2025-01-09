import {useNavigate, useParams} from 'react-router-dom'
import { doctors } from '../assets/assets'
import { useEffect, useState } from 'react'

const Doctor = () => {

  const {speciality} = useParams()
  const [filterDoc , setFilterDoc] = useState([])
  const navigate = useNavigate()
 
  const applyFilter = () =>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors , speciality])
  return (
    <div>
      <p className='text-gray-600 font-light'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col text-sm text-gray-600 gap-4'>
          <p onClick={ () =>  speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300  cursor-pointer ${speciality === 'General physician' ? "bg-indigo-50 text-black" : ""} ]`}>General physician</p>
          <p onClick={ () =>  speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300  cursor-pointer ${speciality === 'Gynecologist' ? "bg-indigo-50 text-black" : ""} ]`}>Gynecologist</p>
          <p onClick={ () =>  speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300 cursor-pointer ${speciality === 'Dermatologist' ? "bg-indigo-50 text-black" : ""} ]`}>Dermatologist</p>
          <p onClick={ () =>  speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300 cursor-pointer ${speciality === 'Pediatricians' ? "bg-indigo-50 text-black" : ""} ]`}>Pediatricians</p>
          <p onClick={ () =>  speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300 cursor-pointer ${speciality === 'Neurologist' ? "bg-indigo-50 text-black" : ""} ]`}>Neurologist</p>
          <p onClick={ () =>  speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[940vw sm:w-auto px-3 py-1.5 border border-gray-400 rounded transition-all duration-300 mb-2 cursor-pointer ${speciality === 'Gastroenterologist' ? "bg-indigo-50 text-black" : ""} ]`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-5 mt-5'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={ ()=> navigate(`/appiontment/${item._id}`)} className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}> 
                  <img className="bg-blue-50" src={item.image} alt="" />
                 <div className="p-4">
                 <div className="flex items-center gap-2 text-sm text-center text-green-500">
                     <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Avilable</p>
                 </div>
                 <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                 <p className="text-gray-600 text-sm font-medium">{item.speciality}</p>
                 </div>
              </div>
          ))}
        </div>
      </div>
       
    </div>
  )
}

export default Doctor
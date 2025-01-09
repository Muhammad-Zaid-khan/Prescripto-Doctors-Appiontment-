import { useEffect, useState } from 'react'
import {doctors} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = (speciality, docId) => {
    
    const [relDoc,setRelDoc] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const DoctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(DoctorData)
        }
    },[speciality,doctors,docId])
    console.log(relDoc);
  return (
<div className='items-center  sm:ml-24 mx-auto md:ml-44 lg:ml-56'>
   <button onClick={ () =>{ navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-50 text-gray-600 rounded-full px-12 py-3 mt-10  ">More</button>
</div>

 ) }
export default RelatedDoctors 
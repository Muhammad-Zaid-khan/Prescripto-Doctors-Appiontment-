import { useState } from "react"
import { assets } from '../assets/assets'

const MyProfile = () => {
   
  const [userData, setUserData] = useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:'richardjamesswap@gmail.com',
    phone: '+1 222 3343435',
    address : {
      line1:'57th Cross, Richmond ',
      line2:'Circle , Church Road, London'
    },
    gender: 'Male',
    dob : "2000-01-20"
  })

  const [isEdit , setIsEdit] = useState("true")
  return (
    <div>
      <div className="max-w-lg flex flex-col gap-2 text-sm ">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {
        isEdit === "false" ? <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" type="text" onChange={ (e) => setUserData(prev => ({...prev,name:e.target.value}))} value={userData.name}/> : <p className="font-medium text-3xl text-neutral-800 mt-4 ">{userData.name}</p>
      }
    </div>
      <div>
         <p className="text-sm mt-4 text-zinc-500 ">CONTACT INFORMATION</p>
         <div className="flex flex-row gap-2 font-medium text-gray-700">
          <p>Email:</p>
          {
           isEdit === "false" ? <input type="email" onChange={ (e) => setUserData(prev => ({...prev,email:e.target.value}))} value={userData.email}/> : <p>{userData.email}</p>
          }
         </div>
         <div className="flex flex-row gap-2 font-medium text-gray-700">
          <p>Phone:</p>
          {
           isEdit === "false" ? <input type="text" onChange={ (e) => setUserData(prev => ({...prev,phone:e.target.value}))} value={userData.phone}/> : <p>{userData.phone}</p>
          }
         </div>
         <div className="flex flex-row gap-2 font-medium text-gray-700">
          <p  className="flex flex-row gap-2 font-medium text-gray-700">Address:</p>
          {
           isEdit === "false" ? <input type="text" onChange={ (e) => setUserData(prev => ({...prev,address:{...prev,line1:e.target.value}}))} value={userData.address.line1}/> : <p>{userData.address.line1}</p>
          }
          {
           isEdit === "false" ? <input type="text" onChange={ (e) => setUserData(prev => ({...prev,address:{...prev,line2:e.target.value}}))} value={userData.address.line2}/> : <p>{userData.address.line2}</p>
          }
         </div>
      </div>
      <div>
        <p className="text-sm mt-4 text-zinc-500 ">BASIC INFORMATION</p>
        <div className="flex flex-row gap-2 font-medium text-gray-700">
          <p>Gender:</p>
          {
            isEdit === "false" ? 
            <select  onChange={ (e) => setUserData(prev => ({...prev,gender:e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> :
            <p>{userData.gender}</p>
          }
        </div>
        <div  className="flex flex-row gap-2 font-medium text-gray-700">
          <p>Birthday:</p>
          {
            isEdit === "false" ? 
            <input type="date"  onChange={ (e) => setUserData(prev => ({...prev,dob:e.target.value}))} value={userData.dob} /> 
            : <p>{userData.dob}</p>
          } 
        </div>
        <div className="mt-4 ">
          <button className="bg-slate-200 border text-gray-500 hover:bg-primary hover:text-white cursor-pointer rounded-full">
            {
              isEdit === "false" ? <p onClick={ () => setIsEdit("true")}  className="p-2 px-4"> Save Information</p> : <p onClick={() => setIsEdit("false")} className="p-2 px-5"> Edit</p>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
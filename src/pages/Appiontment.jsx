import { useParams } from "react-router-dom"
import { assets, doctors } from "../assets/assets"
import { useEffect, useState } from "react"
import "../App.css"
import RelatedDoctors from "../components/RelatedDoctors"

const Appiontment = () => {

  
 
  const {docId} = useParams()
  const [docInfo , setDocInfo] = useState(null)
 
  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }
 
 
  useEffect( ()=>{
     fetchDocInfo()
  },[doctors,docId])  

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`); // 8 AM to 8 PM

  // State
  const [schedule, setSchedule] = useState(
    daysOfWeek.map(day => ({
      day,
      hours: hours.map(hour => ({ time: hour, booked: false })),
    }))
  );
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);

  // Handle day selection
  const handleDaySelect = (index) => {
    setSelectedDayIndex(index);
  };

  // Handle booking a time slot
  const handleTimeBooking = (hourIndex) => {
    setSchedule(prevSchedule =>
      prevSchedule.map((day, dayIndex) =>
        dayIndex === selectedDayIndex
          ? {
              ...day,
              hours: day.hours.map((slot, hIndex) =>
                hIndex === hourIndex ? { ...slot, booked: true } : slot
              ),
            }
          : day
      )
    );
    alert(
      `You booked an appointment on ${schedule[selectedDayIndex].day} at ${schedule[selectedDayIndex].hours[hourIndex].time}`
    );
  };


  return docInfo && (
    <div>
       {/* ------- Doctor Image ------- */}
       <div className="flex flex-col sm:flex-row gap-4 ">
        <div>
           <img className="w-full bg-primary sm:w-74 rounded-lg " src={docInfo.image} alt="" /> 
         </div> 

          <div className="flex-1 border gap-2 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0">
        {/* --------- Doctor name , experience , degree -------- */}
           <p className="flex items-center text-2xl text-gray-900 font-medium">
           {docInfo.name}
             <img className='w-5 ml-1' src={assets.verified_icon} alt="" />
           </p>
           <div className="flex items-center gap-2 text-sm mt-1 text-gray-400">
             <p>{docInfo.degree} - {docInfo.speciality}</p> 
             <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
           </div>
             {/* --------- Doctor About -------- */}
             <div>
               <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                 About <img src={assets.info_icon} alt="" />
               </p>
               <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
           </div> 
           <p className="text-gray-500 text-sm font-medium mt-4">
            Appiontmet fee : <span> ${docInfo.fees}</span>
           </p>
         </div>  
       </div> 
       {/* -------- Booking slot -------- */}
       <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-400">
       <div className="container">
      <h1>Doctor Appointment Booking</h1>

      {/* Step 1: Select Day */}
      {selectedDayIndex === null ? (
        <div className=" mt-2 mb-4 mr-3">
          <h2 className="text-gray-500">Select a Day:</h2>
          <div className="mt-3">
            {schedule.map((day, index) => (
              <button  className="bg-primary text-gray-700 rounded-lg px-2 py-1 mr-2 " key={index} onClick={() => handleDaySelect(index)}>
                {day.day}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Step 2: Select Time */
        <div className="time-selection">
          <h2 className="text-gray-500">Select a Time for {schedule[selectedDayIndex].day}:</h2>
          <div className='button'>
            {schedule[selectedDayIndex].hours.map((slot, hourIndex) => (
              <button className= {`time-slot ${slot.booked ? "booked" : ""}`}
                key={hourIndex}
                onClick={() => handleTimeBooking(hourIndex)}
                disabled={slot.booked}
              >
                {slot.time}
              </button>
            ))}
          </div>
          <button className="text-gray-500 mt-2 mb-5" onClick={() => setSelectedDayIndex(null)}>
            Back to Day Selection
          </button>
        </div> 
      )}
    </div>
      {/* ------ Listing Realted Doctors ------ */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
       </div>
  )
}

export default Appiontment
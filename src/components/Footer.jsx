import  {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-3'>
        <div className='md:flex md:flex-col md:grid  grid-cols-[3fr_2fr_1fr] sm:grid sm:grid-flow-row sm:grid-rows-[3fr_2fr_1fr] sm:gap-5 sm:mx-3 gap-14 my-10 md:mx-40 text-sm'>
           {/* ------ Left Side ------- */}
           <div>
              <img className='w-40 mb-7 sm:mb-1' src={assets.logo} alt="" />
              <p className='w-full text-gray-600 leading-6 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nesciunt assumenda recusandae nam perferendis quas? Exercitationem, excepturi, ad modi, fuga minus dolore natus optio nemo delectus deserunt impedit tempora eos!</p>
           </div>
            {/* ------ Center Section ------- */}
           <div>
            <p className='text-xl mb-5 font-medium' >COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600 mb-3' >
              <li>Home</li> 
              <li>About Us</li> 
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
           </div>
            {/* ------ Right Side ------- */}
           <div>
            <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
            <ul  className='flex flex-col gap-2 text-gray-600' >
              <li>+92-333-4455678</li>
              <li>prescriptoweb@gmail.com</li>
            </ul>
           </div>
        </div>
           {/* ------ Copyright Section ------- */}
             <div>
               <hr/>
               <p className='py-5 text-center font-light text-gray-600'>Copyright 2024@ Prescripto - All Right Reserved.</p>
         </div>
    </div>
  )
}

export default Footer
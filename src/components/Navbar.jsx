import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
// import { assets } from '../assets'
import { useState } from 'react';


const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu , setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
 
  return (
    
    <div className='flex items-center justify-between text-sm border-b-2 py-4 sm:px-1 md:px-16  mb-10  border-b-grey-400'>
        <img onClick={ () => navigate('/')} className='w-32 cursor-pointer' src={assets.logo} alt='' />
        <ul className='hidden md:flex items-start font-medium gap-5'>
          <NavLink to= '/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to= '/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to= '/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-4'> 
            {
            token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0  text-base font-medium text-gray-600 pt-14 z-20 hidden group-hover:block '>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={ () => {navigate('my-profile')}} className='hover:text-black cursor-pointer' >My Profile</p>
                        <p onClick={ () => {navigate('my-appiontments')}} className='hover:text-black cursor-pointer' >My Appointments</p>
                        <p onClick={ () => {setToken(false)} } className='hover:text-black cursor-pointer' >Log Out</p>
                    </div>
                </div>
            </div> 
            : <button onClick={ () => 
            navigate('/login')
            } className='bg-primary text-white py-3 px-7 rounded-full font-light md:block'> Create Account </button>
            }
        
        </div>
        <img className='w-8 md:hidden  ' onClick={ () => {setShowMenu(true)}} src={assets.menu_icon} alt="" />
        <div className= {` ${ showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 bg-white `}>
          <div className='flex items-center justify-between mt-3 p-3'>
            <img className=' w-38 p-2 ' src={assets.logo} alt="" />
            <img onClick={ () => { setShowMenu(false)}} className=' w-14 p-2 ' src={assets.cross_icon} alt="" />
          </div>
          <div className= {` ${ showMenu ? 'fixed w-full' : 'hidden'} `}>
          <ul className='flex flex-col mt-5 px-5 gap-6 items-center text-lg font-medium '>
           <Link to={'/'}  onClick={ () => {setShowMenu(false)}} > <p className='text-gray-500 px-4 py-2 rounded inline-block'>HOME</p> </Link> 
            <NavLink  to={'/doctors'} onClick={ () => {setShowMenu(false)}} > <p className='text-gray-500 font-medium cursor-pointer hover:underline hover:text-gray-700 '>ALL DOCTORS</p></NavLink>
            <NavLink  to={'/about'} onClick={  () => {setShowMenu(false)}} > <p className='text-gray-500 font-medium cursor-pointer hover:underline hover:text-gray-700 '>ABOUT</p></NavLink>
            <NavLink  to={'/contact'} onClick={ () => {setShowMenu(false)}} > <p className='text-gray-500  font-medium cursor-pointer hover:underline hover:text-gray-700 '>CONTACT</p></NavLink>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
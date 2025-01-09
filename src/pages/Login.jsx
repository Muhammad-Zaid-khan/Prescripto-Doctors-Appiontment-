import { useState } from "react"

const Login = () => {

  const [state , setState] = useState("Sign Up")
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col m-auto min-w-[340px] items-start gap-3 p-3 sm:min-w-98 border rounded-xl text-zinc-700 text-sm shadow-lg">
        <div>
          <p className="text-2xl font-semibold "> {state === "Sign Up" ? "Create Account" : "Login" }</p>
        </div>
        {
          state === 'Sign Up' 
               &&
               <div className="w-full">
               <p>Full Name</p>
               <input className="w-full border border-zinc-600 rounded p-2 mt-1 bg-zinc-100" type="text" onChange={(e) =>setName(e.target.name)} value={name} />
             </div>
        }
        <div className="w-full">
          <p>Email</p>
          <input className="w-full border border-zinc-600 rounded p-2 mt-1 bg-zinc-100"  type="email" onChange={(e) =>setEmail(e.target.email)} value={email} />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className=" w-full border border-zinc-600 rounded p-2 mt-1 bg-zinc-100"  type="password" onChange={(e) =>setPassword(e.target.password)} value={password} />
        </div>
        <button className=" w-full bg-primary text-white py-2 rounded-md mt-2 ">{state === "Sign Up" ? "Create Account" : "Login" }</button>
         {
         state === "Sign Up" ? <p>You have already account <span onClick= { () =>  setState('Login')} className="text-primary underline cursor-pointer">Login Here</span></p> :
           <p>Create a new account <span onClick={  () =>  setState('Sign Up')} className="text-primary underline cursor-pointer">Sign Up</span></p>
         } 
      
      </div>  
    </form>
  )
}

export default Login
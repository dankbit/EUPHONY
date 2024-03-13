import React from 'react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from "react";
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import {useCookies} from "react-cookie";

export function LoginComponent(props) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cookies,setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
  
    const data = {email, password};
    const response = await makeUnauthenticatedPOSTRequest(
        "/auth/login",
        data
    );
    if (response && !response.err) {
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, {path: "/", expires: date});
        alert("Success");
        navigate("/home");
    } else {
        alert("Failure");
    }
};





  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-400 w-full flex justify-center">
      
             <svg xmlns="http://www.w3.org/2000/svg" width={144} height={144} viewBox="0 0 72 72" {...props}><path fill="#8967aa" d="M34 9.146L12 21.75v27.5l22 12.604z"></path><path fill="#f4aa41" d="M38 9.146L60 21.75v27.5L38 61.854z"></path><path fill="#b399c8" d="M18 26.76L23 24l5 2.76V47l-5-2.76L18 47z"></path><path d="m12 21.75l-.497-.868a1 1 0 0 0-.503.868zM34 9.146h1a1 1 0 0 0-1.497-.868zM12 49.25h-1a1 1 0 0 0 .503.868zm22 12.604l-.497.868A1 1 0 0 0 35 61.854zM60 49.25l.497.868A1 1 0 0 0 61 49.25zM38 61.854h-1a1 1 0 0 0 1.497.868zM60 21.75h1a1 1 0 0 0-.503-.868zM38 9.146l.497-.868A1 1 0 0 0 37 9.146zM12.497 22.618l22-12.604l-.994-1.736l-22 12.604zM13 49.25v-27.5h-2v27.5zm21.497 11.737l-22-12.605l-.994 1.736l22 12.604zm.503.867V9.146h-2v52.708zm24.503-13.472l-22 12.605l.994 1.735l22-12.604zM59 21.75v27.5h2v-27.5zM37.503 10.014l22 12.604l.994-1.736l-22-12.604zM37 9.146v52.708h2V9.146z"></path><path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={3.35} d="M18 26.76L23 24l5 2.76V47l-5-2.76L18 47z"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={3.35} d="M31 16.055A9.004 9.004 0 0 0 23.055 24"></path><circle cx={47} cy={28} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><circle cx={47} cy={42} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><circle cx={47} cy={20} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><circle cx={55} cy={41} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><circle cx={55} cy={33} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><circle cx={55} cy={25} r={2} fill="none" stroke="#000" strokeWidth={3.35}></circle><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.35} d="M38 30h2l4 4h4l5 5"></path><path fill="none" stroke="#000" strokeWidth={3.35} d="M50.5 37.5L53 35m2-4v-4"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.35} d="M38 16h4l3 3"></path><circle r={2} fill="none" stroke="#000" strokeWidth={3.35} transform="matrix(1 0 0 -1 47 50)"></circle><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.35} d="M38 54h4l3-3"></path><path fill="none" stroke="#000" strokeWidth={3.35} d="M47 22v4m0 18v4"></path></svg>
          
        


        <span className="text mt-10 text-6xl font-serif">Euphony</span>
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col ">
     
        <div className='text-xl font-bold  mb-9 '>To continue,log in to Euphony
        </div>
       
        <TextInput label= "Email ID or username"
        placeholder = "Email ID or username"
        className = "my-4"
        value = {email}
        setValue={setEmail}
        />

        <PasswordInput 
        label= "Password"
        placeholder="Password"
        value = {password}
        setValue={setPassword}
        />
        <div className='w-full flex items-center justify-end my-8'>
        <button className="bg-red-600 text-lg font-semibold text-black w-1/3 p-2 rounded-full mt-5"
           onClick={(e)=>{
            e.preventDefault();
            login();
           }}
        >LOG IN</button>
       
        </div>
        <div className='w-full border-b border-solid border-gray-400'></div>
        <div className='my-6 font-bold text-lg'>
            Dont Have an account?

        </div>
        <div className='border border-gray-400 text-gray-500 font-bold w-full flex items-center justify-center py-4 rounded-full'>
          <Link to = "/signup">SIGN UP FOR EUPHONY</Link>  
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;



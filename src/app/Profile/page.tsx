'use client'
import { Button } from "@/pages/SharedPage/Button";
import InputFieldComponent from "@/pages/SharedPage/InputFieldComponent";
import { RingLoaderComponent } from "@/pages/SharedPage/Loader";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
    const [loading,setLoading] = useState(true);
    const handleStartLoading = () => {
    setLoading(true);
  };

  const handleStopLoading = () => {
    setLoading(false);
  };
  return (
    <div className="px-10">
    
    <div>Profile page</div>

    <Button onClick={handleStopLoading}>stop loading</Button>
    <Button onClick={handleStartLoading} className="text-red-800 bg-cyan-400 ml-7">Start loading</Button>
    
<InputFieldComponent 

                    type='email'
                    title='Email'
                
                    name='email'
                    
                    className=' h-12  bg-red-400  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  border-gray-600  placeholder-gray-400    focus:ring-blue-500  focus:border-blue-500'
                    placeholder='Enter Your Email'
                    required=''
/>
    {
      loading ? <RingLoaderComponent color="#cd1298"/> : <><Link  className="text-blue-700 underline "href="/">Home</Link></>
    }
   
    </div>
  )
}

export default Profile
'use client'
import { Button } from "@/pages/SharedPage/Button";
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
    

    {
      loading ? <RingLoaderComponent color="#cd1298"/> : <><Link  className="text-blue-700 underline "href="/">Home</Link></>
    }
    </div>
  )
}

export default Profile
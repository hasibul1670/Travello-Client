'use client'

import { Button } from "@/components/SharedComponents/Button";
import Card from "@/components/SharedComponents/Card";
import { RingLoaderComponent } from "@/components/SharedComponents/Loader";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
  const image ="https://via.placeholder.com/500" 
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

    <Card title="hello card" image={image} description="Eiusmod velit veniam occaecat labore cillum dolore aliquip aute amet laborum. Occaecat voluptate est adipisicing dolor nisi in incididunt exercitation velit do deserunt non."/>

   
    </div>
  )
}

export default Profile
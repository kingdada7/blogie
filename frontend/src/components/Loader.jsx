import React from "react";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  
    const [loading, setLoading] = useState(true);
     useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timmer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <InfinitySpin width="200" color="cyan"  />
      </div>
    );
  }
  
  
  }

 

export default Loader;

import { useState } from "react";

export default useApi = (apiFunc) => {




   const  [data , setData] = useState([]);
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(false);



const request  = async() => {
    setLoading(true);
 const response =   await apiFunc() ;
 setLoading(false); 
 setError(!response.ok);
 setData(response.data);
 return response; 

};
return {data , request , loading , error , setData} //return the specefic objects 
    
}
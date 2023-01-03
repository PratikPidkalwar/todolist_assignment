import React from "react";
import { useLocation,Navigate,Outlet} from 'react-router-dom';

const RequireLogin=()=>{
    const location=useLocation()
    const token=sessionStorage.getItem('token')
    console.log(token)
   return(
    token?<Outlet/>:<Navigate to="/" state={{from:location}} replace/>
   )

}
export default RequireLogin;

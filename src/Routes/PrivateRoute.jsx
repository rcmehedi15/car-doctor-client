import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';
import {useLocation} from 'react-router-dom'
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first Then Book Now!',
           
          })
          
          return <Navigate to="/login" state={{from: location}} replace></Navigate>;
        }

   
};

export default PrivateRoute;


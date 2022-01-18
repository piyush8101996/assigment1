import { Routes,Route} from "react-router-dom";
import Signinpage from "../pages/Signinpage";
import Signuppage from "../pages/Signuppage";


const Pageroute = () => {
    return (
        <Routes>
             <Route path="/signup" element={<Signuppage/>}/> 
            <Route path="/" element={<Signinpage />}/>        
        </Routes>
    )
}
export default Pageroute;
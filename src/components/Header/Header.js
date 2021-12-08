import { useNavigate } from 'react-router';
function Header(){
    const navigate = useNavigate();
    function homebuttonhander(){
        navigate('/');
    }
    return(
        <div className="text-warning d-flex justify-content-between ">
            <div className="h2 w-50 p-2">
               Code Place <br/>
               <small className="h6">You can check out code here for different topics and projects.</small>
            </div>
            <div className="header w-50 " >
                <button className="btn btn-outline-warning m-2" onClick={homebuttonhander}>Home</button>
                <button className="btn btn-warning m-2">About Us</button>
            </div>
            <hr className="bg-dark"/>
        </div>) 
    
}

export default Header;
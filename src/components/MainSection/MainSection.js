// importing foldercard and loading component
import FolderCard from '../../ui/FolderCard/FolderCard';
import Loading from '../../ui/LoadingCard/Loading';
// use state and useeffect from react
import {useState, useEffect, useContext} from 'react'
// navigator
import {useNavigate} from 'react-router'
// importing the Context 
import { Context } from '../../App'


function MainSection() {
    const navigate = useNavigate();
    const value = useContext(Context);
    const [contents, setcontents] = useState(null)
    const [url, setapi] = useState(null)
    const [name, setname] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        if(url==null){
            setapi(value.path)
            if(value.path==null) navigate('/')
        }else{
            setloading(true);
            fetch(url,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response=>response.json()).then(data => {
                setcontents(data); 
                setloading(false);
            }).catch(err=> {alert("We are sorry something has gone wrong...\nYou are being redirected to Home Page.."); navigate('/')})
        }
            
        
    },[url])
    function onclickhandler(){
        let string = url
        string = string.split('?')[0].replace(name,'')
        if(url === string) navigate('/')
        setapi(string)
    }

    return (
        <section className="border rounded p-3">
            <button className="btn btn-dark mb-3" onClick={onclickhandler}>Back</button>
            <span className='h5'>File Explorer</span>
            <div className="container-fluid border rounded bg-white" id="codearea">
                {!loading ? contents.map(item => <FolderCard props={{item,setapi,setname}} key={item.sha}/>): <Loading/> }
            </div>
        </section>
    )
}
export default MainSection;
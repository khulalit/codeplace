import RepoCard from "../../ui/RepoCard/RepoCard";
import Loading from '../../ui/LoadingCard/Loading';
import {useState, useEffect} from 'react'
function Repos() {
    const [repos,setrepos] = useState(null)
    const [isloading,setisloading] = useState(true)
    const [iserr, setiserr] = useState(false)
    useEffect(()=>{
        fetch('https://api.github.com/users/khulalit/repos').then(response=>response.json()).then(data=>{
            setrepos(data);
            setisloading(false);
        }).catch(error=>{setiserr(true);console.log(error)})
    },[])
    return (
       <div className="">
           <hr/>
           <h5 className="text-white bg-dark p-2 text-center">Home</h5>
           <hr/>
           {!isloading&&!iserr?repos.map(repo=><RepoCard repoData={repo} key={repo.id}/>): <Loading/>}
       </div>
    )
}
export default Repos;
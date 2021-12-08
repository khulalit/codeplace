import styles from './FolderStructure.module.css'
import file_logo from '../assets/file_logo.svg'
import logo from '../assets/folderlogo.svg'
import {useState} from 'react'

function FolderCard({props}) {
    const [fetching,setfetching] = useState(false)
    function download(url,name){
        if(!url) throw new Error("Url is empty....")
        setfetching(true)
        fetch(url).then(response => response.blob()).then(blob => {
            setfetching(false)
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.style = "display: none";

            if (name && name.length) a.download = name;
            document.body.appendChild(a);
            a.click();
        }).catch(err=>alert(err))
    }
    function onClickHandler(e) {
        let url = props.item.url
        //props.setapi(url)
        if(props.item.type==='file'){
            //window.open(props.item.html_url+"?raw=true",'_blank')
             download(props.item.download_url,props.item.name)
        }
            // if(!fetching)
            //     wi
                //download(props.item.html_url+"?raw=true",props.item.name)
        if(props.item.type==='dir'){
                props.setname(props.item.name)
                props.setapi(url)
        }
    }
    function onClickFolderDownloadHandler() {
        alert("You will be redirected to downgit.github.io. Your fie will be downloaded.....Check out the original site.")
        window.open("https://downgit.github.io/#/home?url="+props.item.html_url,'_blank');
    }
    return (
    <div className={styles.adjust} >
        <div className={styles.card}>
            <div className={styles.container}>
                {props.item.type==="file"?<img src={file_logo} alt="folder" width="40p" heigth="40px"/>:<img src={logo} alt="folder" width="40px" heigth="40px"/>}

                <div className="h6" onClick={onClickHandler}>{props.item.name}</div>

                <div className="flex-grow-1 text-end">
                    {props.item.type==='file'?<button className="btn btn-dark" id="l" onClick={onClickHandler}>{fetching?"Downloading....":"Download"}</button>:(<span><button className="btn btn-dark"  onClick={onClickHandler}>View Folder</button> <button className="btn btn-dark"  onClick={onClickFolderDownloadHandler}>Download </button></span>)}
                </div>    
            </div>
        </div>
    </div>)
}
export default FolderCard;
import styles from './RepoCard.module.css'
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { Context } from '../../App'


function RepoCard({repoData}) {
    const value = useContext(Context);
    const navigate = useNavigate();
    function onclickhandler() {
        value.setpath(repoData.url+"/contents")
        navigate('/repo');
    }
    function onclickdownloadhandler() {
        window.location=`https://github.com/khulalit/${repoData.name}/archive/refs/heads/main.zip`
    }
    return(
        <div className={styles.card_repo}>
            <h6>{repoData.name}</h6>
            {/* <p className={styles.title_repo}>{repoData.description}</p> */}
            <p className={styles.p}><button className={styles.button_repo} onClick={onclickhandler}>Go to Repo</button><button id="t" className={styles.button_repo} onClick={onclickdownloadhandler}>Download</button></p>
        </div>
    )
}
export default RepoCard;
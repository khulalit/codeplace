import styles from './Loading.module.css'
function Loading(){
    return(
        <div className={styles.card}>
            <div className={styles.container}>
                <h4 className="text-center"><b>Loading...</b></h4>
            </div>
        </div>
    )
}
export default Loading;
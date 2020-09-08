import styles from '../../styles/Loading.module.css';

const LoadingComponent = () => {

    return (
        <div className={styles.loaderRoot}>
        <div className={styles.loader}></div>
        </div>
    )
}

export default LoadingComponent;
import styles from '../styles/ArticleTitle.module.css'

const ArticleTitle = ({ title }) => {
    return (
        <div className={styles.articleTitle}>
            <span className={styles.item}></span>
            <h4>{title}</h4>
        </div>
    )
}

export default ArticleTitle
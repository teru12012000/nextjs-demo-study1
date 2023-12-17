import styles from "./style.css"

interface props {
    title: string
}

const RouterButton = (props: props) => {
    return <button className={styles.btn}>{props.title}</button>
}

export default RouterButton

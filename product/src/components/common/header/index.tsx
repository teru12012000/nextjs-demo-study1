import styles from "./style.css"

export interface props {
    title: string
}

const Header = (props: props) => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.h1}>{props.title}</h1>
            </header>
        </div>
    )
}

export default Header

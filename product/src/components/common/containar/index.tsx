import { ReactNode } from "react"

import styles from "./style.css"

interface props {
    children: ReactNode | ReactNode[]
}

const Containar = (props: props) => {
    return <main className={styles.conatiner}>{props.children}</main>
}
export default Containar

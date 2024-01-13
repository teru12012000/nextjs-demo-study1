import MainBox from "../../components/common/mainBox"
import ja from "../../shared/i18n/ja"
import { catType } from "../../shared/types/resType"

import styles from "./style.css"

interface props {
    data: catType[]
}

const CatSearchView = (props: props) => {
    return (
        <main>
            <h1>{ja.cat.title}</h1>
            <div className={styles.mainContent}>
                <div>
                    {props.data ? (
                        <MainBox imageURL={props.data[0].url} />
                    ) : null}
                </div>
            </div>
        </main>
    )
}

export default CatSearchView

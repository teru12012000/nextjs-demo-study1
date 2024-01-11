import MainBox from "@/components/common/mainBox"
import ja from "@/shared/i18n/ja"
import { foxType } from "@/shared/types/resType"

import styles from "./style.css"

interface props {
    data: foxType
}

const FoxSearchView = (props: props) => {
    return (
        <main>
            <h1>{ja.fox.title}</h1>
            <div className={styles.mainContent}>
                <div>
                    {props.data ? (
                        <MainBox imageURL={props.data.image} />
                    ) : null}
                </div>
            </div>
        </main>
    )
}

export default FoxSearchView

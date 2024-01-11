import Link from "next/link"

import RouterButton from "@/components/ui/routerButton"
import { allRoutingPath } from "@/shared/data/routingPath"
import ja from "@/shared/i18n/ja"
import { routingPath } from "@/shared/types/routingPath"

import styles from "./style.css"

const TopView = () => {
    return (
        <>
            <h1 className={styles.title}>{ja.home.title}</h1>
            <div className={styles.secoundTitle}>
                <h2>{ja.home.menu}</h2>
            </div>
            <div className={styles.menuList}>
                {allRoutingPath.map((item: routingPath, index: number) => (
                    <div key={index} className={styles.linkBox}>
                        <Link href={item.path}>
                            <RouterButton title={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopView

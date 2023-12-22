"use client"

import ja from "@/shared/i18n/ja"

import styles from "./style.css"

const ReloadButton = () => {
    const handleClick = () => {
        window.location.reload()
    }

    return (
        <button className={styles.btn} onClick={handleClick}>
            {ja.reloadButton.reloadButton}
        </button>
    )
}

export default ReloadButton

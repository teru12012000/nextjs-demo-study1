"use client"

import { Button } from "@yamada-ui/react"

import ja from "../../../shared/i18n/ja"

const ReloadButton = () => {
    const handleClick = () => {
        window.location.reload()
    }

    return <Button onClick={handleClick}>{ja.reloadButton.reloadButton}</Button>
}

export default ReloadButton

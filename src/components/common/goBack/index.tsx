"use client"

import ja from "@/shared/i18n/ja"
import Link from "next/link"
import { usePathname } from "next/navigation"

const GoBack = () => {
    const path = usePathname()

    return (
        <div>
            {path !== "/" ? <Link href="/">{ja.header.goBack}</Link> : null}
        </div>
    )
}

export default GoBack

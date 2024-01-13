import { UIProvider } from "@yamada-ui/react"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import Containar from "../components/common/containar"
import GoBack from "../components/common/goBack"
import Header from "../components/common/header"
import ja from "../shared/i18n/ja"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "勉強会アプリ",
    description: "勉強会に使用する動物検索アプリです",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <UIProvider>
                    <Header title={ja.header.title} />
                    <GoBack />
                    <Containar>{children}</Containar>
                </UIProvider>
            </body>
        </html>
    )
}

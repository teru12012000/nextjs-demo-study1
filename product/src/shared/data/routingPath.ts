import ja from "../i18n/ja"
import { routingPath } from "../types/routingPath"

export const allRoutingPath: routingPath[] = [
    {
        path: "/dog",
        title: ja.home.goDogPage,
    },
    {
        path: "/cat",
        title: ja.home.goCatPage,
    },
    {
        path: "/fox",
        title: ja.home.goFoxPage,
    },
]

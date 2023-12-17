import Containar from "@/components/common/containar"
import Header from "@/components/common/header"
import RouterButton from "@/components/ui/routerButton"
import { allRoutingPath } from "@/shared/data/routingPath"
import ja from "@/shared/i18n/ja"
import { routingPath } from "@/shared/types/routingPath"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>{ja.home.title}</h1>
            <div
                style={{
                    marginTop: "30px",
                }}
            >
                <h2>{ja.home.menu}</h2>
            </div>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                {allRoutingPath.map((item: routingPath, index: number) => (
                    <div key={index} style={{ marginTop: "5px" }}>
                        <Link href={item.path}>
                            <RouterButton title={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

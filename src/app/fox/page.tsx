import MainBox from "@/components/common/mainBox"
import ReloadButton from "@/components/common/reloadButton"
import { getSSG } from "@/model/SSG"
import ja from "@/shared/i18n/ja"
import Image from "next/image"

const Fox = async () => {
    const data = await getSSG()

    return (
        <main>
            <h1>{ja.fox.title}</h1>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                <div>{data ? <MainBox imageURL={data.image} /> : null}</div>
            </div>
        </main>
    )
}

export default Fox

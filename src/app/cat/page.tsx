import MainBox from "@/components/common/mainBox"
import ReloadButton from "@/components/common/reloadButton"
import { getSSR } from "@/model/SSR"
import ja from "@/shared/i18n/ja"
import Image from "next/image"
const Cat = async () => {
    const data = await getSSR()

    return (
        <main>
            <h1>{ja.cat.title}</h1>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                <div>{data ? <MainBox imageURL={data[0].url} /> : null}</div>
            </div>
        </main>
    )
}

export default Cat

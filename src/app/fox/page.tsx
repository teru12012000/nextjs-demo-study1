import MainBox from "@/components/common/mainBox"
import { getSSG } from "@/model/SSG"
import ja from "@/shared/i18n/ja"

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

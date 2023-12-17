import ReloadButton from "@/components/common/reloadButton"
import { getSSR } from "@/model/SSR"
import ja from "@/shared/i18n/ja"
import Image from "next/image"
const Cat = async () => {
    const data = await getSSR()

    return (
        <>
            <h1>{ja.cat.title}</h1>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                <div>
                    {data ? (
                        <div>
                            <Image
                                width={320}
                                height={240}
                                src={data[0].url}
                                alt=""
                            />
                            <div>
                                <ReloadButton />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Cat

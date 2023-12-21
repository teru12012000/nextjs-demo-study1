"use client"

import MainBox from "@/components/common/mainBox"
import ReloadButton from "@/components/common/reloadButton"
import { getCSR } from "@/model/CSR"
import ja from "@/shared/i18n/ja"
import Image from "next/image"
import useSWRImmutable from "swr/immutable"

const Dog = () => {
    const { data, isLoading } = useSWRImmutable(
        "https://random.dog/woof.json",
        getCSR,
    )

    return (
        <main>
            <h1>{ja.dog.title}</h1>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                {isLoading ? (
                    <div>isLoading</div>
                ) : (
                    <div>{data ? <MainBox imageURL={data.url} /> : null}</div>
                )}
            </div>
        </main>
    )
}

export default Dog

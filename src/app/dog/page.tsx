"use client"

import ReloadButton from "@/components/common/reloadButton"
import { getCSR } from "@/model/CSR"
import ja from "@/shared/i18n/ja"
import Image from "next/image"
import useSWRImmutable from "swr/immutable"

const Dog = () => {
    const { data, isLoading } = useSWRImmutable(
        "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
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
                    <div>
                        {data ? (
                            <div>
                                <Image
                                    width={320}
                                    height={240}
                                    src={data[0]}
                                    alt=""
                                />
                                <div>
                                    <ReloadButton />
                                </div>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Dog

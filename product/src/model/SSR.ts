import { catType } from "../shared/types/resType"

export const getSSR = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        cache: "no-store",
    })
    const data = await res.json()

    return data as catType[]
}

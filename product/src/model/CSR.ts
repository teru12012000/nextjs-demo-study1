import { dogType } from "../shared/types/resType"

export const getCSR = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    return data as dogType
}

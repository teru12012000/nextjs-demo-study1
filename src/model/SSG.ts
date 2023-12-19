import { foxType } from "@/shared/types/resType"

export const getSSG = async () => {
    const res = await fetch("https://randomfox.ca/floof/")
    const data = await res.json()

    return data as foxType
}

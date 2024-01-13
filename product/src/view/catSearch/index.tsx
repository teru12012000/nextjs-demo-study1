import CatSearchView from "./view"
import { getSSR } from "../../model/SSR"

const CatSearch = async () => {
    const data = await getSSR()

    return <CatSearchView data={data} />
}

export default CatSearch

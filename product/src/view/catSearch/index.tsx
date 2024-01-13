import { getSSR } from "../../model/SSR"

import CatSearchView from "./view"

const CatSearch = async () => {
    const data = await getSSR()

    return <CatSearchView data={data} />
}

export default CatSearch

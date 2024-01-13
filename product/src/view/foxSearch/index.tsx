import { getSSG } from "../../model/SSG"

import FoxSearchView from "./view"

const FoxSearch = async () => {
    const data = await getSSG()

    return <FoxSearchView data={data} />
}

export default FoxSearch

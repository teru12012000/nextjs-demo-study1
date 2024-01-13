import FoxSearchView from "./view"
import { getSSG } from "../../model/SSG"

const FoxSearch = async () => {
    const data = await getSSG()

    return <FoxSearchView data={data} />
}

export default FoxSearch

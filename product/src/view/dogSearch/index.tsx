"use client"

import useSWRImmutable from "swr/immutable"

import DogSearchView from "./view"
import { getCSR } from "../../model/CSR"

const DogSearch = () => {
    const { data, isLoading } = useSWRImmutable(
        "https://dog.ceo/api/breeds/image/random",
        getCSR,
    )

    return <DogSearchView data={data} isLoading={isLoading} />
}

export default DogSearch

"use client"

import useSWRImmutable from "swr/immutable"

import { getCSR } from "@/model/CSR"

import DogSearchView from "./view"

const DogSearch = () => {
    const { data, isLoading } = useSWRImmutable(
        "https://dog.ceo/api/breeds/image/random",
        getCSR,
    )

    return <DogSearchView data={data} isLoading={isLoading} />
}

export default DogSearch

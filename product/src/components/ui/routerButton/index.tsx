import { Button } from "@yamada-ui/react"

interface props {
    title: string
}

const RouterButton = (props: props) => {
    return <Button>{props.title}</Button>
}

export default RouterButton

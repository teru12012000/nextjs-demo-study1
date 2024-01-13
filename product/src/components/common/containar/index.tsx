import { ReactNode } from "react"

interface props {
    children: ReactNode | ReactNode[]
}

const Containar = (props: props) => {
    return (
        <main
            style={{
                width: "75%",
                height: "100vh",
                margin: "20px auto",
                textAlign: "center",
            }}
        >
            {props.children}
        </main>
    )
}
export default Containar

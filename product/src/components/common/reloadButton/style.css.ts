import { style } from "@vanilla-extract/css"

const styles = {
    btn: style({
        width: "120px",
        height: "60px",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        border: "1px solid black",
        ":hover": {
            backgroundColor: "aqua",
            color: "white",
            border: "1px solid aqua",
            transition: "0.6s",
        },
    }),
}

export default styles

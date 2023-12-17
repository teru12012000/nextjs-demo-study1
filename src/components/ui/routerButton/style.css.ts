import { style } from "@vanilla-extract/css"

const styles = {
    btn: style({
        width: "120px",
        height: "60px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        cursor: "pointer",
        borderRadius: "5%",
        ":hover": {
            backgroundColor: "aqua",
            color: "white",
            transition: "0.6s",
        },
    }),
}

export default styles

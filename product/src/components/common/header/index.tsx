export interface props {
    title: string
}

const Header = (props: props) => {
    return (
        <div>
            <header
                style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px",
                }}
            >
                <h1
                    style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                    }}
                >
                    {props.title}
                </h1>
            </header>
        </div>
    )
}

export default Header

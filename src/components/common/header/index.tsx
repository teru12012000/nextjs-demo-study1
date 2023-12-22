interface props {
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
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}

export default Header

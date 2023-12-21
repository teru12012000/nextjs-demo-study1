import ReloadButton from "../reloadButton"
import Image from "next/image"

interface props {
    imageURL: string
}

const MainBox = (props: props) => {
    return (
        <div>
            <Image width={320} height={240} src={props.imageURL} alt="" />
            <div>
                <ReloadButton />
            </div>
        </div>
    )
}

export default MainBox

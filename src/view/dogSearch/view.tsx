import MainBox from "@/components/common/mainBox"
import ja from "@/shared/i18n/ja"
import { dogType } from "@/shared/types/resType"

interface props {
    isLoading: boolean
    data?: dogType
}

const DogSearchView = (props: props) => {
    return (
        <main>
            <h1>{ja.dog.title}</h1>
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                {props.isLoading ? (
                    <div>isLoading</div>
                ) : (
                    <div>
                        {props.data ? (
                            <MainBox imageURL={props.data.message} />
                        ) : null}
                    </div>
                )}
            </div>
        </main>
    )
}

export default DogSearchView

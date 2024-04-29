import ThemeContext from "../theme/ThemeContext"
import { useContext } from "react"

function TextInput(props) {
    const theme = useContext(ThemeContext)

    return (
        <input 
            type="text" 
            value={props.value}
            style={{
                border: theme.insetBorder,
                boxShadow: theme.inset,
                width: props.width,
                fontSize: "18px",
                padding: "5px",
                borderRadius: props.borderRadius,
                fontFamily: props.fontFamily
        }}/>
    )
}

TextInput.defaultProps = {
    width: "fit-content",
    borderRadius: "0px",
    fontFamily: "Roboto Mono, monospace",
    value: "",
}

export default TextInput;
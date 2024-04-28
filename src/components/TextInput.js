import ThemeContext from "../theme/ThemeContext"
import { useContext } from "react"

function TextInput({}) {
    const theme = useContext(ThemeContext)

    return (
        <input 
            type="text" 
            style={{
                border: theme.insetBorder,
                boxShadow: theme.inset,
                fontSize: "18px",
                padding: "5px"
        }}/>
    )
}

export default TextInput;
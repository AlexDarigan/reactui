import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"

function ScrollGrid(props) {
    const theme = useContext(ThemeContext)

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            border: "2px black solid", 
            width: "80%",
            height: '400px', 
            backgroundColor: theme.surface,
            justifyContent: "flex-start",
            overflow: "auto", 
            flexGrow: "1",
        }}>
            {props.children}
        </div>
    )
}

export default ScrollGrid;

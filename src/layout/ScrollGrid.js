import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"

function ScrollGrid(props) {
    const theme = useContext(ThemeContext)

    return (
        <div style={{
            display: props.display,
            flexDirection: props.flexDirection,
            flexWrap: props.flexWrap,
            border: props.border, 
            width: props.width,
            height: props.height, 
            backgroundColor: props.backgroundColor ? props.backgroundColor: theme.surface,
            justifyContent: props.justifyContent,
            overflow: props.overflow, 
            flexGrow: props.flexGrow,
        }}>
            {props.children}
        </div>
    )
}

ScrollGrid.defaultProps = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    border: "2px black solid", 
    width: "80%",
    height: '400px', 
    backgroundColor: null,
    justifyContent: "flex-start",
    overflow: "auto", 
    flexGrow: "1",
}

export default ScrollGrid;

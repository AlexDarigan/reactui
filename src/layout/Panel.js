import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"

function Panel(props) {
    const theme = useContext(ThemeContext)

    return (
        <div style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor: theme.primary,
            boxShadow: props.elevation ? props.elevation: theme.elevation,
            display: props.display,
            flexDirection: props.flexDirection,
            width: props.width,
            height: props.height,
            margin: props.margin,
            padding: props.padding,
            border: props.border,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            alignItems: props.alignHorizontal
        }}>
            {props.children}
        </div>
    );
}

export default Panel;

Panel.defaultProps = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    height: "fit-content",
    margin: "0 auto",
    padding: "10px",
    border: "4px black solid",
    borderRadius: "8px",
    marginBottom: "10%",
    alignHorizontal: "center",
    backgroundColor: null,
    elevation: null,
}
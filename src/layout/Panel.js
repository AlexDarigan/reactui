import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"

function Panel(props) {
    const theme = useContext(ThemeContext)

    return (
        <div style={{
            backgroundColor: theme.primary,
            boxShadow: theme.elevation,
            width: props.width,
            margin: props.margin,
            padding: props.padding,
            border: props.border,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
        }}>
            {props.children}
        </div>
    );
}

export default Panel;

Panel.defaultProps = {
    width: "fit-content",
    margin: "0 auto",
    padding: "10px",
    border: "4px black solid",
    borderRadius: "8px",
    marginBottom: "10%",
}
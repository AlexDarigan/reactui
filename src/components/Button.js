import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";

function Button(props) {
    const theme = useContext(ThemeContext)

    return (
        <button 
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor: theme.secondary,
                color: theme.onSecondary,
                fontSize: '26px',
                fontWeight: "extra bold",
                fontFamily: "sans-serif",
                borderRadius: '8px',
                textAlign: "center",
                alignSelf: props.alignSelf,
                width: props.width,
                padding: props.padding,
                fontFamily: props.fontFamily
        }}
            onClick={props.onClick}
        >
            <strong>{props.text}</strong>
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: null,
    width: "fit-content",
    padding: "10px",
    alignSelf: "center",
    fontFamily: "Roboto Mono, monospace",
    onClick: () => {}
}

export default Button;


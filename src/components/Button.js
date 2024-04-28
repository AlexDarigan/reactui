import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";

function Button(props) {
    const theme = useContext(ThemeContext)

    return (
        <button 
            style={{
                backgroundColor: theme.secondary,
                color: theme.onSecondary,
                fontSize: '26px',
                fontWeight: "extra bold",
                fontFamily: "sans-serif",
                borderRadius: '8px',
                textAlign: "center",
                alignSelf: props.alignSelf,
                width: props.width,
                padding: props.padding

        }}>
            <strong>{props.text}</strong>
        </button>
    )
}

Button.defaultProps = {
    width: "fit-content",
    padding: "10px",
    alignSelf: "center"
}

export default Button;


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
                padding: '10px'

        }}>
            <strong>Login</strong>
        </button>
    )
}

export default Button;


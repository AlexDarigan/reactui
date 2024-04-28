import { useContext } from "react"
import Row from "../layout/Row"
import Label from "./Label"
import ThemeContext from "../theme/ThemeContext"


function LabelText({label, text, fontColor}) {
    const theme = useContext(ThemeContext)

    return (
        <Row>
            <Label label={label} fontColor={fontColor? fontColor: theme.onSecondary}></Label>
            <Label label={text} fontColor={fontColor? fontColor: theme.onSecondary} fontWeight="normal"></Label>
        </Row>
    )
}

LabelText.defaultProps = {
    fontColor: null
}

export default LabelText;
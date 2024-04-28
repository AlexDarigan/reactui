import { useContext } from "react"
import Row from "../layout/Row"
import Label from "./Label"
import ThemeContext from "../theme/ThemeContext"


function LabelText({label, text}) {
    const theme = useContext(ThemeContext)

    return (
        <Row>
            <Label label={label} fontColor={theme.onSecondary}></Label>
            <Label label={text} fontColor={theme.onSecondary} fontWeight="normal"></Label>
        </Row>
    )
}

export default LabelText;
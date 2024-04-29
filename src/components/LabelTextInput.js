import Column from "../layout/Column"
import Label from "./Label"
import TextInput from "./TextInput"

function LabelTextInput({label}) {
    return (
        <Column gap="2px" alignHorizontal="left">
            <Label label={label}></Label>
            <TextInput></TextInput>
        </Column>
    )
}

export default LabelTextInput;
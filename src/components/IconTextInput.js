import Row from "../layout/Row";
import LabelTextInput from "./LabelTextInput";

function IconTextInput({label, icon}) {
    return (
        <Row>
            {icon}
            <LabelTextInput label={label}/>
        </Row>
    )
}


export default IconTextInput;
import Panel from "../layout/Panel";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Button from "../components/Button";
import TextInput from "../components/LabelTextInput"
import LabelTextInput from "../components/LabelTextInput";
import IconTextInput from "../components/IconTextInput";
import { ReactComponent as DownIcon } from "../icons/down.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg" 
import Label from "../components/Label";
import LabelText from "../components/LabelText";
import { Link } from "react-router-dom";

function Checkout () {
    return (
        <Panel width="1240px" height="480px">
        <Row width="100%" alignHorizontal="left">
            <Column gap="20px" margin="0px 0px 0px 0px">
            <IconTextInput label="Payment" icon={<Button text={<DownIcon style={{width:"24px", height: "24px"}}/>}/>}/>
            <IconTextInput label="Shipping Address" icon={<Button text={<DownIcon style={{width:"24px", height: "24px"}}/>}/>}/>
            <IconTextInput label="Billing Address" icon={<Button text={<DownIcon style={{width:"24px", height: "24px"}}/>}/>}/>
            </Column>
            <Column width="100%">
                <Row width="80%">
                        <Label label="Quantity"/>
                        <span style={{width:"80%"}}/>
                        <Label label="27"/>
                    </Row>
                    <Row width="80%">
                        <Label label="Price"/>
                        <span style={{width:"80%"}}/>
                        <Label label="€20"/>
                    </Row>
                    <Row width="80%">
                        <Label label="Shipping"/>
                        <span style={{width:"80%"}}/>
                        <Label label="€40"/>
                    </Row>
                    <Row width="80%">
                        <Label label="Quantity"/>
                        <span style={{width:"80%"}}/>
                        <Label label="27"/>
                    </Row>
                    <br></br>
                    <Column alignHorizontal="left">
                        <Label label="Shipping Address"/>
                        <span>Alex Dart</span>
                        <span>SETU Carlow</span>
                        <span>Kilkenny Road</span>
                        <span>Carlow</span>
                        <span>Ireland</span>
                        <span>R93 V690</span>
                    </Column>
            </Column>
        </Row>
        <span style={{height: "60px"}}/>
        <Link to="/orders">
        <Button text="Confirm Purchase"></Button>
        </Link>
    </Panel>
    );
}

export default Checkout;
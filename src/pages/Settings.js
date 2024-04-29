import Panel from "../layout/Panel";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Button from "../components/Button";
import LabelTextInput from "../components/LabelTextInput";
import Label from "../components/Label";

function Settings () {
    return (
        <Panel width="80%" height="550px" marginBottom="75px">
            <Row gap="100px" height="100%">
                <Column height="550px">
                    <LabelTextInput label="Card Number"/>
                    <LabelTextInput label="Name on Card"/>
                    <LabelTextInput label="CVC / Security Number"/>
                    <LabelTextInput label="Card Expiration"/>
                    <div style={{flex: "8"}}/>
                    <LabelTextInput label="Save As"/>
                    <div style={{flex: "2"}}/>
                    <Button text="Save Card"/>
                </Column>
                <Column height="550px">
                    <Label label="Billing Address"/>
                    <textarea style={{width: "300px", height: "300px"}}/>
                    <div style={{flex: "2"}}/>
                    <LabelTextInput label="Save As"/>
                    <div style={{flex: "2"}}/>
                    <Button text="Save Billing"/>
                </Column>
                <Column height="550px">
                    <Label label="Billing Address"/>
                    <textarea style={{width: "300px", height: "300px"}}/>
                    <div style={{flex: "2"}}/>
                    <LabelTextInput label="Save As"/>
                    <div style={{flex: "2"}}/>
                    <Button text="Save Shipping"/>
                </Column>
            </Row>
        </Panel>
    );
}

export default Settings;
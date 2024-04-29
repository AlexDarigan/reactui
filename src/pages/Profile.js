import Panel from "../layout/Panel";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Label from "../components/Label";
import Button from "../components/Button";
import LabelText from "../components/LabelText";
import { ReactComponent as AvatarIcon } from "../icons/avatar.svg"
import { ReactComponent as StarsIcon } from "../icons/stars.svg"
import ScrollGrid from "../layout/ScrollGrid";

function Profile () {
    return (
        <Panel width="1024px" height="480px" marginBottom="100px">
            <Row width="100%" height="100%">
                <Column alignHorizontal="left">
                    <AvatarIcon/>
                    <StarsIcon/>
                    <LabelText label="Name" text="@AlexDart" fontColor="black"/>
                    <LabelText label="Location" text="Ireland" fontColor="black"/>
                    <LabelText label="Joined" text="27th March 2020" fontColor="black"/>
                    <LabelText label="Last Active" text="29th January 2024" fontColor="black"/>
                    <div style={{height: "0.5em"}}></div>
                    <Button text="Contact"/>
                </Column>
                {/* <Column width="50%" alignHorizontal="right" overflow="auto"> */}
                <ScrollGrid justifyContent="center">
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   <Feedback/>
                   </ScrollGrid>
                {/* </Column> */}
            </Row>
        </Panel>
    );
}

export default Profile;

function Feedback() {
    return (
        <div style={{borderBottom: "2px black solid", width: "100%", padding: "8px"}}>
        <Row width="100%">
            <Label label="@User"/>
            <Label label="Perfect. No Problems. A++"/>
            <StarsIcon/>
        </Row>
        </div>
    );
}
import Panel from "../layout/Panel";
import ScrollGrid from "../layout/ScrollGrid";
import Column from "../layout/Column";
import Row from "../layout/Row";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Label from "../components/Label";


function Inbox() {
    return (
        <Panel width="800px">
            <Row width="800px">
                <ScrollGrid width="300px">
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>
                   <Message/>

                </ScrollGrid>
                <Column margin="8px" height="100%">
                    <TextInput/>
                    <textarea style={{width: "1000px", height: "300px"}}></textarea>
                    <Button text="Send"/>   
                </Column>
            </Row>
        </Panel>
    )
}

function Message() {
    return (
        <Panel width="280px" margin="8px" height="fit-content" alignHorizontal="left">
        <Column alignHorizontal="left">
            <Label label="Offer"/>
            <Label label="@AlexD"/>
            <Label label="27th March 2020"/>
        </Column>
        </Panel>
    );
}

export default Inbox;

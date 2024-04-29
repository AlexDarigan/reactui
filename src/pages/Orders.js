import Panel from "../layout/Panel";
import Row from "../layout/Row";
import Image from "../components/Image";
import BlackLotus from "../icons/blacklotus.png";
import ScrollGrid from "../layout/ScrollGrid";
import Button from "../components/Button"
import CardListing from "../components/CardListing";
import { Link } from "react-router-dom";
import LabelText from "../components/LabelText";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import IconTextInput from "../components/IconTextInput";
import { ReactComponent as DownIcon } from "../icons/down.svg"

function ViewCard () {
    return (
       <Panel width="1024px" height="550px" marginBottom="70px">
        <Row width="100%" height="90%">
            <Image src={BlackLotus} height="75%" width="35%"/>
            <ScrollGrid>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
               <CardListing title="Black Lotus"/>
            </ScrollGrid>
        </Row>
        <Row width="100%">
        <LabelText label="Quantity" text="27" fontColor="black"/>
        <LabelText label="Total" text="$200" fontColor="black"/>
        <Row>
            <IconTextInput label="Select Order"/>
            <Button text={<DownIcon style={{width: "24px", height:"24px"}}/>}></Button>
        </Row>
        </Row>
       </Panel>
    );
}

export default ViewCard;


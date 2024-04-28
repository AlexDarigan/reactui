import Panel from "../layout/Panel";
import Row from "../layout/Row";
import Image from "../components/Image";
import BlackLotus from "../icons/blacklotus.png";
import ScrollGrid from "../layout/ScrollGrid";
import Button from "../components/Button"
import CardListing from "../components/CardListing";

function ViewCard () {
    return (
       <Panel width="1024px" height="550px" marginBottom="70px">
        <Row width="100%" height="90%">
            <Image src={BlackLotus} height="75%" width="35%"/>
            <ScrollGrid>
               <CardListing/>
               <CardListing/>
               <CardListing/>
               <CardListing/>
               <CardListing/>
               <CardListing/>
               <CardListing/>
            </ScrollGrid>
        </Row>
        <Button text="Checkout"/>
       </Panel>
    );
}

export default ViewCard;


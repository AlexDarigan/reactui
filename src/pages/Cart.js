import Panel from "../layout/Panel";
import Row from "../layout/Row";
import Image from "../components/Image";
import BlackLotus from "../icons/blacklotus.png";
import ScrollGrid from "../layout/ScrollGrid";
import Button from "../components/Button"
import CardListing from "../components/CardListing";
import { Link } from "react-router-dom";
import LabelText from "../components/LabelText";
import Column from "../layout/Column";
import { useState } from "react";

function Cart () {

    return (
        <Column padding="12px" gap="0px">
            <Panel width="80%">
                <Row>
                    <ScrollGrid>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    <CardListing title="Black Lotus"/>
                    </ScrollGrid>
                    <Image src={BlackLotus} height="75%" width="35%"/>
                </Row>
                <div style={{height: "10px"}}></div>
                <Row gap="100px">
                    <LabelText label="Quantity" text="27 Cards" fontColor="black"/>
                    <LabelText label="Total" text="$200" fontColor="black"/>
                    <Link to="/checkout"><Button text="Checkout"/></Link>
                </Row>
            </Panel>
       </Column>
    );
}

export default Cart;


import { useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Panel from "../layout/Panel";
import ThemeContext from "../theme/ThemeContext";
import Label from "../components/Label";
import BlackLotus from "../icons/blacklotus.png"
import Card from "../components/Card";
import ScrollGrid from "../layout/ScrollGrid";

function Browse () {
    const theme = useContext(ThemeContext)

    return (
        <Panel width="1240px" height="550px" marginBottom="5%">
            <Column alignHorizontal="center" padding="0px">
                <Row>
                    <TextInput width="400px" borderRadius="8px"/>
                    <Button text="search"/>
                </Row>
          
                <br></br>
                {/* Scroll Panel */}
                <ScrollGrid>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                    <Card title="Black Lotus" game="Magic: The Gathering" image={BlackLotus}/>
                </ScrollGrid>
            </Column>
        </Panel>
    );
}

export default Browse;


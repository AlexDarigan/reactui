import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"
import Row from "../layout/Row"
import Column from "../layout/Column"
import Panel from "../layout/Panel"
import LabelText from "./LabelText"
import { ReactComponent as MintConditionIcon } from "../icons/mint.svg"
import { ReactComponent as NonMintConditionIcon } from "../icons/nonmint.svg"
import { ReactComponent as GoodConditionIcon } from "../icons/good.svg"
import { ReactComponent as WornConditionIcon } from "../icons/worn.svg"
import { ReactComponent as PoorConditionIcon } from "../icons/poor.svg"
import { ReactComponent as CartIcon } from "../icons/cart.svg"
import { ReactComponent as ViewIcon } from "../icons/view.svg"
import { ReactComponent as GermanFlagIcon } from "../icons/germany.svg"
import { ReactComponent as EnglishFlagIcon } from "../icons/english.svg"
import { ReactComponent as LocationIcon } from "../icons/location.svg"
import { ReactComponent as LanguageIcon } from "../icons/language.svg"
import Button from "./Button"

function CardListing({title, game, image}) {
    const theme = useContext(ThemeContext)

    return (
        <Panel backgroundColor={theme.secondary} width="92%" marginBottom="8px" margin="8px 8px 8px 8px">
        <Column alignHorizontal="left" width="100%">
            <Row width="100%">
                <LocationIcon/>
                <EnglishFlagIcon/>
                <LanguageIcon/>
                <GermanFlagIcon/>
                <div style={{width:"40%"}}></div>
                <LabelText label="Price :" text="€200"/>
                <MintConditionIcon/>
            </Row>
            <LabelText label="Condition" text="Good"/>
            <LabelText label="Language" text="English"/>
            <LabelText label="Location" text="Germany"/>
            <LabelText label="Seller" text="@Alex"/>
            <Row flexDirection="row-reverse" width="100%">
            <Button text={<CartIcon/>} backgroundColor={theme.primary}/>
            <div style={{width: "80%"}}></div>
            <LabelText label="Cart:" text="2"/>
            </Row>
        </Column>        
        </Panel>
    )
}

export default CardListing;
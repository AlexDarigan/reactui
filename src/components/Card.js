import { useContext } from "react"
import ThemeContext from "../theme/ThemeContext"
import { ReactComponent as ViewIcon } from "../icons/view.svg"
import Label from "./Label"
import Column from "../layout/Column"
import Image from "./Image"
import Panel from "../layout/Panel"
import { Link } from "react-router-dom"

function Card({title, game, image}) {
    const theme = useContext(ThemeContext)

    return (
        <Link to="/card">
            <Panel backgroundColor={theme.secondary} width="200px" height="200px" marginBottom="8px" margin="8px 8px 8px 8px">
            <Column alignHorizontal="center">
                <Label label={title} fontColor={theme.onSecondary}/>
                <Image src={image}/>
                <Label label={game}/>
                <ViewIcon/>
            </Column>        
            </Panel>
        </Link>
    )
}

export default Card;
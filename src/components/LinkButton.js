import Button from "./Button"
import { Link } from "react-router-dom"

function LinkButton({route, text}) {
    return (<center><Link to={route}><Button text={text}/></Link></center>)
}

export default LinkButton;
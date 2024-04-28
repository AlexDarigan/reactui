import Button from "./Button"
import { Link } from "react-router-dom"

function LinkButton({route}) {
    return (<center><Link to={route}><Button/></Link></center>)
}

export default LinkButton;
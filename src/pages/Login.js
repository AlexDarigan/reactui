import ThemeContext from '../theme/ThemeContext';
import { useContext } from 'react';
import { ReactComponent as MailIcon } from '../icons/mail.svg'
import Row from "../layout/Row"
import Column from '../layout/Column';

function Login () {
    const theme = useContext(ThemeContext)

    return (
        <div style={{backgroundColor: theme.secondary}}>
            <div>
            <Column>
                <IconTextInput label={"Username"}/>
                <IconTextInput label={"Email"}/>
            </Column>
            </div>
        </div>
    );
}


function IconTextInput({label}) {
    return (
        <Row>
            <MailIcon/>
            <TextInput style={{flex: "1"}} label={label}/>
        </Row>
    )
}

function TextInput(props) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <label>{props.label}</label>
            <input type="text"/>
        </div>
    )
}

TextInput.defaultProps = {
    label: "label"
}

export default Login;
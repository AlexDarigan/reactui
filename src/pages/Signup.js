import Column from "../layout/Column";
import Panel from "../layout/Panel";
import LinkButton from "../components/LinkButton";
import IconTextInput from "../components/IconTextInput";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as MailIcon } from '../icons/mail.svg';
import { ReactComponent as PasswordIcon } from "../icons/lock.svg";


function Signup () {
    return (
        <Panel>
        <Column gap="26px">
            <IconTextInput label="Username" icon={<UserIcon/>}/>
            <IconTextInput label="Email" icon={<MailIcon/>}/>
            <IconTextInput label="Password" icon={<PasswordIcon/>}/>
            <IconTextInput label="Confirm Password" icon={<PasswordIcon/>}/>
            <LinkButton route="/login" text="Sign Up"/>
        </Column>
    </Panel>
    );
}

export default Signup;
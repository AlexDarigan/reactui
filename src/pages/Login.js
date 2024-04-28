import Column from '../layout/Column';
import Panel from '../layout/Panel';
import IconTextInput from '../components/IconTextInput';
import LinkButton from '../components/LinkButton';

function Login () {
    return (
        <Panel>
            <Column gap="26px">
                <IconTextInput label="Username"/>
                <IconTextInput label="Password"/>
                <LinkButton route="/browse" text="Login"/>
            </Column>
        </Panel>
    );
}






export default Login;
import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import LabelText from '../components/LabelText';
import Button from '../components/Button';
import Row from './Row';
import LabelTextInput from '../components/LabelText';
import { ReactComponent as ProfileIcon } from "../icons/user.svg"
import { ReactComponent as MailIcon } from "../icons/mail.svg"
import { ReactComponent as BrowseIcon } from "../icons/view.svg"
import { ReactComponent as LogoutIcon } from "../icons/logout.svg"
import { ReactComponent as SettingsIcon } from "../icons/settings.svg"
import { ReactComponent as OrderIcon } from "../icons/order.svg"
import Label from '../components/Label';
import { Link } from 'react-router-dom';

// Profile
// Browse
// Logout
// Orders
// Inbox
// Settings
// Sell?

function Header() {
    const theme = useContext(ThemeContext)
  
    return (
        <div style={{
            marginLeft: '0', 
            marginRight: '0', 
            marginTop: '0', 
            height: '40px', 
            backgroundColor: theme.primary, 
            position: 'sticky', 
            top: '0'
        }}>
        <Row alignVertical="center" width="96%" height="100%" padding="8px">
            <Link to="/profile">
                <Row>
                    <ProfileIcon/>
                    <Label label="Profile"/>
                </Row>
            </Link>

            <Link to="/browse">
                <Row>
                    <BrowseIcon/>
                    <Label label="Browse"/>
                </Row>
            </Link>


            <Link to="/inbox">
                <Row>
                    <MailIcon/>
                    <Label label="Inbox"/>
                </Row>
            </Link>

            <Link to="/orders">
                <Row>
                    <OrderIcon/>
                    <Label label="Orders"/>
                </Row>
            </Link>


            <Link to="/settings">
                <Row>
                    <SettingsIcon/>
                    <Label label="Settings"/>
                </Row>
            </Link>


            <div style={{width: "60%"}}></div>

            <Link to="/login">
                <Row>
                    <LogoutIcon/>
                    <Label label="Logout"/>
                </Row>
            </Link>

        </Row>
        </div>
    );
}

export default Header;
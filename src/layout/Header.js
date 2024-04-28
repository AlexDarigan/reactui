import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

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
        Content
        </div>
    );
}

export default Header;
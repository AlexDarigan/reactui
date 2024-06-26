import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Outlet } from 'react-router-dom';


function Content() {
    const theme = useContext(ThemeContext)
  
    return (
      <main style={{
          backgroundColor: theme.surface, 
          justifyContent: 'center',
          alignContent: 'center',
          height: '100vh'
        }}>
        <Outlet/>
      </main>
    )
  }

export default Content;
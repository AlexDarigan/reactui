import { Outlet } from 'react-router-dom';
import Theme from './styles.json'

function Scaffold() {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

function Header() {
  return (
    <div style={{
        marginLeft: '0', 
        marginRight: '0', 
        marginTop: '0', 
        height: '40px', 
        backgroundColor: Theme.primary, 
        position: 'sticky', 
        top: '0'
      }}>
      Content
    </div>
  );
}

function Content() {
  return (
    <main style={{
        backgroundColor: Theme.surface, 
        height: '100vh'
      }}>
        <Outlet/>
    </main>
  )
}

function Footer() {
  return (
    <div style={{
        marginLeft: '0', 
        marginRight: '0', 
        marginTop: '0', 
        height: '40px', 
        backgroundColor: Theme.primary, 
        position: 'sticky', 
        bottom: '0'
      }}>
      Content
    </div>
  )
}


export default Scaffold;

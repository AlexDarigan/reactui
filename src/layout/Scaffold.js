import ThemeContext from '../theme/ThemeContext';
import Theme from '../styles.json'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Scaffold() {
  return (
    <>
      <ThemeContext.Provider value={Theme}>
        <Header/>
          <Content/>
        <Footer/>
      </ThemeContext.Provider>
    </>
  );
}

export default Scaffold;
